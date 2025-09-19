"use client";

import Image from "next/image";
import InfoBox from "@/components/InfoBox";

export default function Home() {
  return (
    <main style={{ height: "100vh", background: "#FFF6EC", overflow: "hidden" }}>
      <div style={{ display: "flex", height: "100vh" }}>
        {/* Left Side - Decorative Pictures */}
        <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="relative">
            {/* Decorative elements can be added here later */}
          </div>
        </div>

        {/* Right Side - Event Information Tables */}
        <div style={{ width: 720, minWidth: 720, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", marginLeft: 250 }}>
          {/* Hourglass image, repositioned to match reference */}
          <div
            style={{
              position: "absolute",
              width: 118.69,
              height: 175.66,
              top: -10,
              left: -60,
              zIndex: 10,
              transform: "rotate(-15deg)",
              opacity: 1,
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Image
              src="/Img/hourglass.png"
              alt="Hourglass"
              width={119}
              height={176}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>

          <section
            style={{
              width: 696,
              height: 799,
              borderRadius: 16,
              background: "#FEECD8",
              boxShadow: "0px 0px 7px 0px #00000040",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start"
            }}
          >
            <div className="p-6 sm:p-8">
              {/* Hero Title - Right aligned, single line */}
              <div className="flex justify-start mb-6">
                <h1
                  style={{
                    width: 323,
                    height: 75,
                    fontFamily: "var(--font-lalezar)",
                    fontWeight: 400,
                    fontSize: 48,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    textAlign: "right",
                    color: "#CC6D14",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    whiteSpace: "nowrap",
                    opacity: 1
                  }}
                >
                  همراهان عزیز بهلند!
                </h1>
              </div>

              <div className="mt-6" style={{ width: 599 }}>
                <p
                  className="text-[#292929] text-justify"
                  style={{ fontFamily: "var(--font-vazirmatn)", fontSize: 24, lineHeight: "45px", fontWeight: 500 }}
                >
                  اولین جلسه‌ی پرسش و پاسخ (Ask Anything) در راه است.
                  <br />
                  این رویداد فرصتی است برای اینکه تمام پرسش‌هایتان درباره‌ی مسیر
                  یادگیری، اقتصاد توکنی و آینده‌ی بهلند را مطرح کنید.
                </p>
              </div>

              <hr
                className="mt-6 border-dashed"
                style={{ width: 600, borderColor: "#4D4D4D61", borderWidth: 1, borderStyle: "dashed" }}
              />

              <div className="mt-4 flex items-center justify-between" style={{ width: 600 }}>
                <p
                  className="text-right"
                  style={{ fontFamily: "var(--font-vazirmatn)", fontWeight: 600, fontSize: 20, color: "#4D4D4D", background: "none" }}
                >
                  بهلند : تحولی در یادگیری هدفمند
                </p>
                <span
                  className="rounded-md px-3 py-1"
                  style={{ color: "#4D4D4D", fontFamily: "var(--font-vazirmatn)", fontWeight: 600, fontSize: 20, background: "none" }}
                >
                  آنلاین | حضور آزاد و رایگان
                </span>
              </div>

              {/* Info Boxes Section */}
              <div className="mt-8" style={{ width: 600 }}>
                {/* First Row - Date and Time Boxes */}
                <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
                  {/* Date Info Box */}
                  <InfoBox
                    text="جمعه 4 مهرماه ۱۴۰۴ (۲۶ سپتامبر ۲۰۲۵)"
                    iconSrc="/Img/Calendar.png"
                    iconAlt="Calendar"
                    width={396}
                    height={80}
                  />
                  {/* Time Info Box */}
                  <InfoBox
                    text="ساعت ۶ عصر"
                    iconSrc="/Img/Clock.png"
                    iconAlt="Clock"
                    width={188}
                    height={80}
                  />
                </div>
                {/* Second Row - Telegram Channel Box */}
                <div style={{ marginBottom: 16 }}>
                  <InfoBox
                    text="کانال رسمی بهلند"
                    iconSrc="/Img/letter.png"
                    iconAlt="Telegram Channel"
                    width={600}
                    height={80}
                    link="https://t.me/BehLand_Official"
                  />
                </div>
                {/* Third Row - Website Box */}
                <div style={{ marginBottom: 16 }}>
                  <InfoBox
                    text="وب‌سایت بهلند"
                    iconSrc="/Img/Browser.png"
                    iconAlt="Website"
                    width={600}
                    height={80}
                    link="https://beh.land"
                  />
                </div>

                {/* Registration Button */}
                <div style={{ marginBottom: 16 }}>
                  <button
                    style={{
                      width: 600,
                      height: 56,
                      borderRadius: 8,
                      border: "2px solid #BD5300",
                      background: "#FFF9F3",
                      boxShadow: "0px 4px 0px 0px #CC6D14",
                      padding: "8px 24px",
                      gap: 8,
                      fontFamily: "var(--font-yekan-bakh)",
                      fontWeight: 600,
                      fontSize: 20,
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      textAlign: "center",
                      color: "#BD5300",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(2px)";
                      e.currentTarget.style.boxShadow = "0px 2px 0px 0px #CC6D14";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0px)";
                      e.currentTarget.style.boxShadow = "0px 4px 0px 0px #CC6D14";
                    }}
                    onClick={() => {
                      // TODO: Navigate to registration form page
                      console.log("Navigate to registration form");
                    }}
                  >
                    ثبت نام در رویداد
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
