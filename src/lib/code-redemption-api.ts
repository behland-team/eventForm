type RedemptionResult =
  | { status: "redeemed"; registrationId: number }
  | { status: "already_used" | "invalid" };

const headers = { "Cache-Control": "no-store" };

export async function handleCodeRedemption(
  request: Request,
  redeem: (code: string) => Promise<RedemptionResult>,
) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body.code !== "string" || !/^[0-9]{5}$/.test(body.code)) {
    return Response.json(
      { valid: false, error: "INVALID_CODE_FORMAT" },
      { status: 400, headers },
    );
  }
  try {
    const result = await redeem(body.code);
    if (result.status === "redeemed") {
      return Response.json(
        { valid: true, code: body.code, registrationId: result.registrationId },
        { headers },
      );
    }
    return Response.json(
      {
        valid: false,
        error:
          result.status === "already_used"
            ? "CODE_ALREADY_USED"
            : "CODE_NOT_FOUND",
      },
      {
        status: result.status === "already_used" ? 409 : 404,
        headers,
      },
    );
  } catch (error) {
    console.error("Code redemption failed:", error);
    return Response.json(
      { valid: false, error: "SERVICE_UNAVAILABLE" },
      { status: 503, headers },
    );
  }
}
