import type { Metadata } from "next";
import { Geist, Geist_Mono, Vazirmatn, Lalezar } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
});

const lalezar = Lalezar({
  variable: "--font-lalezar",
  weight: "400",
  subsets: ["arabic"],
});

// Yekan Bakh font (using Vazirmatn as fallback since Yekan Bakh might not be available on Google Fonts)
const yekanBakh = Vazirmatn({
  variable: "--font-yekan-bakh",
  weight: "600",
  subsets: ["arabic"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${vazirmatn.variable} ${lalezar.variable} ${yekanBakh.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
