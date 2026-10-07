import fs from "node:fs";
import path from "node:path";
import nodemailer from "nodemailer";
import { z } from "zod";
import { Prisma } from "@prisma/client";
import {
  CodePoolExhaustedError,
  registerWithCode,
} from "@/lib/registration-codes";

import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const RegistrationSchema = z.object({
  fullName: z.string().trim().min(2).max(80),
  email: z.string().trim().pipe(z.email()),
  phone: z.string().trim().max(30).optional(),
  requestKey: z.uuid().optional(),
});

function readBooleanEnv(name: string, fallback: boolean) {
  const value = process.env[name];

  if (value === undefined) {
    return fallback;
  }

  return value === "true";
}

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: readBooleanEnv("SMTP_SECURE", false),
    tls: {
      rejectUnauthorized: readBooleanEnv("SMTP_TLS_REJECT_UNAUTHORIZED", true),
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    auth: {
      user,
      pass,
    },
  });
}

function getMailBannerAttachment() {
  const bannerPath = path.join(
    process.cwd(),
    "public",
    "Img",
    "mail_banner.png",
  );

  if (!fs.existsSync(bannerPath)) {
    console.warn(
      "Mail banner image is missing. Email will be sent without the banner.",
    );
    return [];
  }

  return [
    {
      filename: "mail_banner.png",
      path: bannerPath,
      cid: "mail-banner",
    },
  ];
}

async function sendConfirmationEmail(
  fullName: string,
  email: string,
  code: string,
) {
  try {
    const transporter = createTransporter();

    if (!transporter) {
      console.warn(
        "SMTP configuration is missing. Confirmation email was not sent.",
      );
      return false;
    }

    const fromAddress = process.env.EMAIL_FROM ?? process.env.SMTP_USER;

    if (!fromAddress) {
      console.warn("Missing sender address. Confirmation email was not sent.");
      return false;
    }

    const safeName = fullName.replace(
      /[&<>"']/g,
      (character) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[character]!,
    );

    await transporter.sendMail({
      from: fromAddress,
      to: email,
      subject: `کد اختصاصی شما در به‌لند: ${code}`,
      attachments: getMailBannerAttachment(),
      text: `سلام ${fullName} عزیز،

اطلاعات تماس شما با موفقیت دریافت شد. از بازدید شما از غرفه به‌لند سپاسگزاریم.
کد اختصاصی شما: ${code}
این کد فقط به شما تعلق دارد؛ آن را نگه دارید.
پنل یوزر: https://t.me/behland_bot?start

از این پس می‌توانید اخبار، اطلاعیه‌ها و مسیر توسعه به‌لند را از طریق لینک‌های زیر دنبال کنید:

وب‌سایت رسمی به‌لند: https://beh.land
خرید توکن : https://dex.beh.land
کانال تلگرام: https://t.me/BehLand_Official
اینستاگرام: https://instagram.com/behlandofficial

با احترام،
تیم به‌لند`,
      html: `
        <div dir="rtl" style="font-family:Tahoma,Arial,sans-serif;line-height:1.9;color:#1f2937;background:#f8fafc;padding:24px;border-radius:16px">
          <img
            src="cid:mail-banner"
            alt="Behland"
            width="600"
            style="display:block;width:100%;max-width:600px;height:auto;margin:0 auto 16px;border-radius:12px"
          />
          <h1 style="font-size:20px;margin:0 0 16px;color:#335A92">اطلاعات شما در نمایشگاه ثبت شد</h1>
          <p style="margin:0 0 12px">سلام ${safeName} عزیز،</p>
          <p style="margin:0 0 12px">اطلاعات تماس شما با موفقیت دریافت شد. از بازدید شما از غرفه به‌لند سپاسگزاریم.</p>
          <p style="margin:0 0 12px">کد اختصاصی شما:</p>
          <p dir="ltr" style="font-size:32px;font-weight:bold;letter-spacing:6px;color:#335A92">${code}</p>
          <p>این کد فقط به شما تعلق دارد؛ آن را نگه دارید.</p>
          <p><a href="https://t.me/behland_bot?start">پنل یوزر</a></p>
          <p style="margin:0 0 12px">از این پس می‌توانید اخبار، اطلاعیه‌ها و مسیر توسعه به‌لند را از طریق لینک‌های زیر دنبال کنید:</p>
          <p style="margin:0 0 8px">
            وب‌سایت رسمی به‌لند:
            <a href="https://beh.land" style="color:#335A92;text-decoration:none">https://beh.land</a>
          </p>
          <p style="margin:0 0 8px">
            خرید توکن :
            <a href="https://dex.beh.land" style="color:#335A92;text-decoration:none">https://dex.beh.land</a>
          </p>
          <p style="margin:0 0 8px">
            کانال تلگرام:
            <a href="https://t.me/BehLand_Official" style="color:#335A92;text-decoration:none">https://t.me/BehLand_Official</a>
          </p>
          <p style="margin:0 0 12px">
            اینستاگرام:
            <a href="https://instagram.com/behlandofficial" style="color:#335A92;text-decoration:none">https://instagram.com/behlandofficial</a>
          </p>
          <p style="margin:0">با احترام،</p>
          <p style="margin:0">تیم به‌لند</p>
        </div>
      `,
    });

    return true;
  } catch (error) {
    console.error("Failed to send confirmation email.", error);
    return false;
  }
}

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

const responseHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "no-store",
};

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = RegistrationSchema.safeParse(json);
  if (!parsed.success) {
    return Response.json(
      { error: "نام و ایمیل واردشده را بررسی کنید." },
      { status: 400, headers: responseHeaders },
    );
  }

  try {
    const result = await registerWithCode(prisma, parsed.data);
    const emailSent =
      result.created && result.registration.email
        ? await sendConfirmationEmail(
            result.registration.fullName,
            result.registration.email,
            result.code,
          )
        : false;

    return Response.json(
      { code: result.code, emailSent },
      {
        status: result.created ? 201 : 200,
        headers: responseHeaders,
      },
    );
  } catch (error) {
    if (error instanceof CodePoolExhaustedError) {
      return Response.json(
        {
          error:
            "ظرفیت کدهای نمایشگاه تکمیل شده است. لطفاً با تیم به‌لند تماس بگیرید.",
        },
        {
          status: 409,
          headers: responseHeaders,
        },
      );
    }
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      // A retried request may have committed while the original response was lost.
      if (parsed.data.requestKey) {
        const existing = await prisma.eventRegistration.findUnique({
          where: { requestKey: parsed.data.requestKey },
          include: { assignedCode: true },
        });
        if (existing?.assignedCode) {
          return Response.json(
            { code: existing.assignedCode.code, emailSent: false },
            { headers: responseHeaders },
          );
        }
      }
      return Response.json(
        { error: "این ایمیل قبلاً ثبت شده است." },
        { status: 409, headers: responseHeaders },
      );
    }
    console.error("Registration failed:", error);
    return Response.json(
      { error: "ثبت اطلاعات انجام نشد. لطفاً دوباره تلاش کنید." },
      {
        status: 503,
        headers: responseHeaders,
      },
    );
  }
}
