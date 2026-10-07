import assert from "node:assert/strict";
import { mkdtemp, readFile, readdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { after, before, test } from "node:test";
import { PrismaClient } from "@prisma/client";
import ts from "typescript";

const source = await readFile(
  new URL("../src/lib/registration-codes.ts", import.meta.url),
  "utf8",
);
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;
const { registerWithCode, redeemRegistrationCode, CodePoolExhaustedError } =
  await import(
    `data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`
  );
const corsSource = await readFile(
  new URL("../src/lib/cors.ts", import.meta.url),
  "utf8",
);
const corsCompiled = ts.transpileModule(corsSource, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;
const corsUrl = `data:text/javascript;base64,${Buffer.from(corsCompiled).toString("base64")}`;
const { corsPreflight } = await import(corsUrl);
const apiSource = await readFile(
  new URL("../src/lib/code-redemption-api.ts", import.meta.url),
  "utf8",
);
const apiCompiled = ts.transpileModule(apiSource, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;
const { handleCodeRedemption } = await import(
  `data:text/javascript;base64,${Buffer.from(apiCompiled.replace("@/lib/cors", corsUrl)).toString("base64")}`
);
async function redeemRequest(body) {
  const response = await handleCodeRedemption(
    new Request("http://localhost/api/codes/redeem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }),
    (code) => redeemRegistrationCode(db, code),
  );
  assert.equal(response.headers.get("Access-Control-Allow-Origin"), "*");
  assert.equal(
    response.headers.get("Access-Control-Allow-Methods"),
    "POST, OPTIONS",
  );
  return response;
}

let db;
let directory;
before(async () => {
  directory = await mkdtemp(path.join(tmpdir(), "behland-code-test-"));
  db = new PrismaClient({
    datasourceUrl: `file:${path.join(directory, "test.db")}`,
  });
  const migrations = new URL("../prisma/migrations/", import.meta.url);
  for (const name of (await readdir(migrations)).sort()) {
    if (!/^\d/.test(name)) continue;
    const sql = await readFile(
      new URL(`${name}/migration.sql`, migrations),
      "utf8",
    );
    for (const statement of sql
      .split(";")
      .map((s) => s.trim())
      .filter(Boolean)) {
      await db.$executeRawUnsafe(statement);
    }
  }
});
after(async () => {
  await db?.$disconnect();
  if (directory) await rm(directory, { recursive: true, force: true });
});

function visitor(overrides = {}) {
  return {
    fullName: "بازدیدکننده آزمایشی",
    phone: "09123456789",
    requestKey: randomUUID(),
    ...overrides,
  };
}

test("CORS preflight allows cross-origin JSON POSTs without consuming a code", async () => {
  const count = await db.registrationCode.count({
    where: { redeemedAt: { not: null } },
  });
  const response = corsPreflight();
  assert.equal(response.status, 204);
  assert.equal(await response.text(), "");
  assert.equal(response.headers.get("Access-Control-Allow-Origin"), "*");
  assert.equal(
    response.headers.get("Access-Control-Allow-Methods"),
    "POST, OPTIONS",
  );
  assert.ok(
    response.headers
      .get("Access-Control-Allow-Headers")
      .includes("Content-Type"),
  );
  assert.equal(
    await db.registrationCode.count({ where: { redeemedAt: { not: null } } }),
    count,
  );
});

test("migration pre-generates exactly 1000 unique five-digit codes", async () => {
  const codes = await db.registrationCode.findMany();
  assert.equal(codes.length, 1000);
  assert.equal(new Set(codes.map((c) => c.code)).size, 1000);
  assert.ok(
    codes.every(
      (c) => /^[1-9]\d{4}$/.test(c.code) && c.registrationId === null,
    ),
  );
});

test("parallel registrations without email receive distinct codes linked to their owners", async () => {
  const results = await Promise.all(
    Array.from({ length: 12 }, () => registerWithCode(db, visitor())),
  );
  assert.equal(new Set(results.map((r) => r.code)).size, 12);
  for (const result of results) {
    assert.equal(result.registration.email, null);
    const code = await db.registrationCode.findUnique({
      where: { code: result.code },
    });
    assert.equal(code.registrationId, result.registration.id);
    assert.ok(code.assignedAt);
  }
});

test("retrying a request returns its original code without consuming another", async () => {
  const input = visitor();
  const first = await registerWithCode(db, input);
  const second = await registerWithCode(db, input);
  assert.equal(first.code, second.code);
  assert.equal(first.registration.id, second.registration.id);
  assert.equal(second.created, false);
  assert.equal(
    await db.eventRegistration.count({
      where: { requestKey: input.requestKey },
    }),
    1,
  );
});

test("duplicate email rolls back and consumes no code", async () => {
  await registerWithCode(db, visitor({ email: "visitor@example.com" }));
  const before = await db.registrationCode.count({
    where: { registrationId: null },
  });
  await assert.rejects(
    registerWithCode(db, visitor({ email: "visitor@example.com" })),
  );
  assert.equal(
    await db.registrationCode.count({ where: { registrationId: null } }),
    before,
  );
});

test("only one concurrent API request can consume an assigned code", async () => {
  const owner = await registerWithCode(db, visitor());
  const results = await Promise.all(
    Array.from({ length: 20 }, () => redeemRequest({ code: owner.code })),
  );
  assert.equal(results.filter((r) => r.status === 200).length, 1);
  assert.equal(results.filter((r) => r.status === 409).length, 19);
  const success = results.find((r) => r.status === 200);
  assert.deepEqual(await success.json(), {
    valid: true,
    code: owner.code,
    registrationId: owner.registration.id,
  });
  const repeated = await redeemRequest({ code: owner.code });
  assert.equal(repeated.status, 409);
  assert.deepEqual(await repeated.json(), {
    valid: false,
    error: "CODE_ALREADY_USED",
  });
  const code = await db.registrationCode.findUnique({
    where: { code: owner.code },
  });
  assert.ok(code.redeemedAt);
  assert.equal(code.registrationId, owner.registration.id);
});

test("API accepts a code without authorization and rejects its second use", async () => {
  const owner = await registerWithCode(db, visitor());
  assert.equal((await redeemRequest({ code: owner.code })).status, 200);
  assert.equal((await redeemRequest({ code: owner.code })).status, 409);
});

test("malformed, unknown, and unassigned codes cannot be consumed", async () => {
  for (const code of [12345, "1234", "123456", "abcde", " 12345", null]) {
    assert.equal((await redeemRequest({ code })).status, 400);
  }
  assert.equal((await redeemRequest({ code: "00000" })).status, 404);
  const unassigned = await db.registrationCode.findFirst({
    where: { registrationId: null },
  });
  assert.equal((await redeemRequest({ code: unassigned.code })).status, 404);
  assert.equal(
    (await db.registrationCode.findUnique({ where: { code: unassigned.code } }))
      .redeemedAt,
    null,
  );
});

test("API refuses malformed JSON before consuming codes", async () => {
  let calls = 0;
  const redeem = async () => {
    calls++;
    return { status: "invalid" };
  };
  const malformed = new Request("http://localhost/api/codes/redeem", {
    method: "POST",
    body: "{",
  });
  assert.equal((await handleCodeRedemption(malformed, redeem)).status, 400);
  assert.equal(calls, 0);
});

test("pool exhaustion does not leave a visitor without a code or overwrite an owner", async () => {
  // Remove unclaimed fixture codes to exercise the last remaining code.
  const free = await db.registrationCode.findFirst({
    where: { registrationId: null },
  });
  await db.registrationCode.deleteMany({
    where: { registrationId: null, code: { not: free.code } },
  });
  const last = await registerWithCode(db, visitor());
  assert.equal(last.code, free.code);
  const count = await db.eventRegistration.count();
  await assert.rejects(registerWithCode(db, visitor()), CodePoolExhaustedError);
  assert.equal(await db.eventRegistration.count(), count);
  assert.equal(
    (await db.registrationCode.findUnique({ where: { code: last.code } }))
      .registrationId,
    last.registration.id,
  );
});
