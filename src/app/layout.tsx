import type { Metadata } from "next";
import "./globals-new.css";

export const metadata: Metadata = {
  title: "بهلند | رویداد پرسش و پاسخ",
  description: "فرم ثبت‌نام و معرفی رویداد",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased font-lalezar">
        {children}
      </body>
    </html>
  );
}
