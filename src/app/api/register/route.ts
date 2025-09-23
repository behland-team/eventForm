import { prisma } from "@/lib/prisma";

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req: Request) {
  const body = await req.json();

  const post = await prisma.eventRegistration.create({
    data: {
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      telegramId: body.telegramId,
      questions: body.questions,
    },
  });
  return new Response(JSON.stringify(post), {
    status: 201,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}
