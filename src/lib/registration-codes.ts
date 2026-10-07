import type { PrismaClient } from "@prisma/client";

export class CodePoolExhaustedError extends Error {
  constructor() {
    super("تمام کدهای نمایشگاه تخصیص داده شده‌اند.");
  }
}

type RegistrationInput = {
  fullName: string;
  phone?: string;
  email?: string;
  requestKey?: string;
};

// SQLite has one writer. Queue local writers so concurrent interactive
// transactions cannot block the transaction that is trying to commit.
const writers = new WeakMap<PrismaClient, Promise<void>>();

async function withWriter<T>(
  db: PrismaClient,
  operation: () => Promise<T>,
): Promise<T> {
  const previous = writers.get(db) ?? Promise.resolve();
  let release!: () => void;
  const next = new Promise<void>((resolve) => {
    release = resolve;
  });
  writers.set(db, next);
  await previous;
  try {
    return await operation();
  } finally {
    release();
    if (writers.get(db) === next) writers.delete(db);
  }
}

export async function registerWithCode(
  db: PrismaClient,
  input: RegistrationInput,
) {
  return withWriter(db, () => allocateCode(db, input));
}

// Consumption is a conditional write, never a separate read followed by a write.
export async function redeemRegistrationCode(db: PrismaClient, code: string) {
  if (!/^[0-9]{5}$/.test(code)) return { status: "invalid" as const };
  return withWriter(db, async () => {
    const redeemed = await db.$queryRaw<Array<{ registrationId: number }>>`
      UPDATE "RegistrationCode" SET "redeemedAt" = CURRENT_TIMESTAMP
      WHERE "code" = ${code} AND "registrationId" IS NOT NULL AND "redeemedAt" IS NULL
      RETURNING "registrationId"
    `;
    if (redeemed[0]) {
      return {
        status: "redeemed" as const,
        registrationId: redeemed[0].registrationId,
      };
    }
    const existing = await db.registrationCode.findUnique({ where: { code } });
    return {
      status:
        existing?.registrationId != null && existing.redeemedAt
          ? ("already_used" as const)
          : ("invalid" as const),
    };
  });
}

// Creating the visitor and claiming a code commit together or both roll back.
async function allocateCode(db: PrismaClient, input: RegistrationInput) {
  return db.$transaction(
    async (tx) => {
      if (input.requestKey) {
        const existing = await tx.eventRegistration.findUnique({
          where: { requestKey: input.requestKey },
          include: { assignedCode: true },
        });
        if (existing?.assignedCode) {
          return {
            registration: existing,
            code: existing.assignedCode.code,
            created: false,
          };
        }
      }

      const registration = await tx.eventRegistration.create({
        data: {
          fullName: input.fullName,
          phone: input.phone || "",
          email: input.email || null,
          requestKey: input.requestKey,
        },
      });

      // A single conditional write prevents two requests from claiming the same code.
      const claimed = await tx.$queryRaw<Array<{ code: string }>>`
      UPDATE "RegistrationCode"
      SET "registrationId" = ${registration.id}, "assignedAt" = CURRENT_TIMESTAMP
      WHERE "code" = (
        SELECT "code" FROM "RegistrationCode"
        WHERE "registrationId" IS NULL AND "redeemedAt" IS NULL ORDER BY "code" LIMIT 1
      ) AND "registrationId" IS NULL AND "redeemedAt" IS NULL
      RETURNING "code"
    `;
      if (!claimed[0]) throw new CodePoolExhaustedError();
      return { registration, code: claimed[0].code, created: true };
    },
    { maxWait: 10000, timeout: 10000 },
  );
}
