import { prisma } from "@/lib/prisma";
import { redeemRegistrationCode } from "@/lib/registration-codes";
import { handleCodeRedemption } from "@/lib/code-redemption-api";

export const runtime = "nodejs";

export async function POST(request: Request) {
  return handleCodeRedemption(request, (code) =>
    redeemRegistrationCode(prisma, code),
  );
}
