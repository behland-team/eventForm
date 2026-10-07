import { randomInt } from "node:crypto";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();
try {
  const total = await db.$transaction(async (tx) => {
    const existing = await tx.registrationCode.findMany({
      select: { code: true },
    });
    if (existing.length > 1000)
      throw new Error("The pool already contains more than 1000 codes.");
    const codes = new Set(existing.map(({ code }) => code));
    const added = [];
    while (codes.size < 1000) {
      const code = String(randomInt(10000, 100000));
      if (!codes.has(code)) {
        codes.add(code);
        added.push({ code });
      }
    }
    if (added.length) await tx.registrationCode.createMany({ data: added });
    return codes.size;
  });
  console.log(
    `Code pool ready: ${total} unique five-digit codes. Existing assignments preserved.`,
  );
} finally {
  await db.$disconnect();
}
