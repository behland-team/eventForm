import fs from "node:fs";
import path from "node:path";
import nodemailer from "nodemailer";
import { z } from "zod";

import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const RegistrationSchema = z.object({
  fullName: z.string().min(2).max(80),
  email: z.email(),
  telegramId: z.string().optional().default(""),
  phone: z.string().optional().default(""),
  walletAddress: z.string().max(255).optional().default(""),
  questions: z.string().max(700).optional().default(""),
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
    auth: {
      user,
      pass,
    },
  });
}

function getMailBannerAttachment() {
  const bannerPath = path.join(process.cwd(), "public", "Img", "mail_banner.png");

  if (!fs.existsSync(bannerPath)) {
    console.warn("Mail banner image is missing. Email will be sent without the banner.");
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

async function sendConfirmationEmail(fullName: string, email: string) {
  try {
    const transporter = createTransporter();

    if (!transporter) {
      console.warn("SMTP configuration is missing. Confirmation email was not sent.");
      return false;
    }

    const fromAddress = process.env.EMAIL_FROM ?? process.env.SMTP_USER;

    if (!fromAddress) {
      console.warn("Missing sender address. Confirmation email was not sent.");
      return false;
    }

    await transporter.verify();

    await transporter.sendMail({
      from: fromAddress,
      to: email,
      subject: "ثبت‌نام شما با موفقیت انجام شد",
      attachments: getMailBannerAttachment(),
      text: `سلام ${fullName} عزیز،

فرم ثبت‌نام شما با موفقیت دریافت شد.
از همراهی شما با به‌لند سپاسگزاریم.

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
          <h1 style="font-size:20px;margin:0 0 16px;color:#335A92">ثبت‌نام شما با موفقیت انجام شد</h1>
          <p style="margin:0 0 12px">سلام ${fullName} عزیز،</p>
          <p style="margin:0 0 12px">فرم ثبت‌نام شما با موفقیت دریافت شد.</p>
          <p style="margin:0 0 12px">از همراهی شما با به‌لند سپاسگزاریم.</p>
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

export async function POST(req: Request) {
  const body = RegistrationSchema.parse(await req.json());

  const post = await prisma.eventRegistration.create({
    data: {
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      walletAddress: body.walletAddress,
      telegramId: body.telegramId,
      questions: body.questions,
    },
  });

  const emailSent = await sendConfirmationEmail(body.fullName, body.email);

  return new Response(JSON.stringify({ post, emailSent }), {
    status: 201,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
}
