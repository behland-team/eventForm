import type { Metadata } from "next";
import "./globals.css";
import {ToastContainer} from "react-toastify";

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
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
      </body>
    </html>
  );
}
