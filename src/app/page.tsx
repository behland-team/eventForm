"use client";

import Image from "next/image";
import InfoBox from "@/components/InfoBox";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  if (isMobile) {
    return (
      <main style={{ minHeight: "100vh", background: "#FFF6EC", padding: "0", margin: "0", overflowX: "hidden" }}>
        <div style={{ position: "relative", width: "100%", minHeight: "100vh", overflowX: "hidden" }}>
          {/* Mobile Main Card */}
          <section
            style={{
              width: 392,
              height: 674,
              position: "absolute",
              top: 70,
              left: "50%",
              transform: "translateX(-50%)",
              borderRadius: 16,
              background: "#FEECD8",
              boxShadow: "0px 0px 7px 0px #00000040",
              display: "flex",
              flexDirection: "column",
              padding: "16px"
            }}
          >
            {/* Mobile Hourglass */}
            <div
              style={{
                position: "absolute",
                width: 77.27,
                height: 115.15,
                top: 6.89,
                left: 18.94,
                transform: "rotate(31.9deg)",
                opacity: 1,
                zIndex: 10
              }}
            >
              <Image
                src="/Img/hourglass.png"
                alt="Hourglass"
                width={77}
                height={115}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>

            {/* Mobile Hero Title */}
            <div
              style={{
                position: "absolute",
                width: 215,
                height: 50,
                top: 70,
                left: 160,
                opacity: 1
              }}
            >
              <h1
                style={{
                  fontFamily: "var(--font-lalezar)",
                  fontWeight: 400,
                  fontSize: 32,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "right",
                  color: "#CC6D14",
                  margin: 0,
                  padding: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  whiteSpace: "nowrap"
                }}
              >
                همراهان عزیز بهلند!
              </h1>
            </div>

            {/* Mobile Content */}
            <div style={{ position: "relative" }}>
              {/* Main Description Text - Inside Card */}
              <div
                style={{
                  position: "absolute",
                  width: 320,
                  height: 120,
                  top: 140,
                  left: 20,
                  opacity: 1
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-vazirmatn)",
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "24px",
                    letterSpacing: "0%",
                    textAlign: "justify",
                    color: "#292929",
                    margin: 0,
                    padding: 0,
                    width: "100%",
                    height: "100%"
                  }}
                >
                  اولین جلسه‌ی پرسش و پاسخ (Ask Anything) در راه است.
                  این رویداد فرصتی است برای اینکه تمام پرسش‌هایتان درباره‌ی مسیر یادگیری، اقتصاد توکنی و آینده‌ی بهلند را مطرح کنید.
                </p>
              </div>

              {/* Behland Subtitle - Inside Card */}
              <div
                style={{
                  position: "absolute",
                  width: 320,
                  height: 25,
                  top: 240,
                  left: 20,
                  opacity: 1
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-vazirmatn)",
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    textAlign: "left",
                    color: "#4D4D4D",
                    margin: 0,
                    padding: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    whiteSpace: "nowrap"
                  }}
                >
                  بهلند : تحولی در یادگیری هدفمند
                </p>
              </div>

              {/* Mobile Info Boxes */}
              <div style={{ marginTop: 270 }}>
                {/* First Row - Date and Time Boxes Side by Side */}
                <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                  {/* Time Box - Left */}
                  <div
                    style={{
                      width: 172,
                      height: 116,
                      borderRadius: 8,
                      background: "#FFFFFF",
                      padding: "8px 16px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8
                    }}
                  >
                    <div style={{ width: 48, height: 48 }}>
                      <Image
                        src="/Img/Clock.png"
                        alt="Clock"
                        width={48}
                        height={48}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div style={{ width: 86, height: 42, textAlign: "center" }}>
                      <p style={{
                        fontFamily: "var(--font-vazirmatn)",
                        fontWeight: 600,
                        fontSize: 16,
                        lineHeight: "100%",
                        color: "#000000",
                        margin: 0
                      }}>
                        ساعت ۶ عصر
                      </p>
                      <p style={{
                        fontFamily: "var(--font-vazirmatn)",
                        fontWeight: 400,
                        fontSize: 12,
                        lineHeight: "100%",
                        color: "#000000",
                        margin: 0,
                        marginTop: 4
                      }}>
                        آنلاین | حضور آزاد
                      </p>
                    </div>
                  </div>

                  {/* Date Box - Right */}
                  <div
                    style={{
                      width: 178,
                      height: 116,
                      borderRadius: 8,
                      background: "#FFFFFF",
                      padding: "8px 16px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8
                    }}
                  >
                    <div style={{ width: 48, height: 48 }}>
                      <Image
                        src="/Img/Calendar.png"
                        alt="Calendar"
                        width={48}
                        height={48}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div style={{ width: 146, height: 40, textAlign: "center" }}>
                      <p style={{
                        fontFamily: "var(--font-vazirmatn)",
                        fontWeight: 600,
                        fontSize: 14,
                        lineHeight: "100%",
                        color: "#000000",
                        margin: 0
                      }}>
                        جمعه 4 مهرماه ۱۴۰۴
                      </p>
                      <p style={{
                        fontFamily: "var(--font-vazirmatn)",
                        fontWeight: 400,
                        fontSize: 12,
                        lineHeight: "100%",
                        color: "#000000",
                        margin: 0,
                        marginTop: 4
                      }}>
                        (۲۶ سپتامبر ۲۰۲۵)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Telegram Channel Box */}
                <div style={{ marginBottom: 12 }}>
                  <div
                    style={{
                      display: "flex",
                      width: 360,
                      height: 48,
                      borderRadius: 8,
                      background: "#FFFFFF",
                      padding: 8,
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    {/* Icon and Text - Left Side */}
                    <div style={{ 
                      display: "flex",
                      alignItems: "center",
                      gap: 8
                    }}>
                      <div style={{ width: 32, height: 32 }}>
                        <Image
                          src="/Img/letter.png"
                          alt="Telegram Channel"
                          width={32}
                          height={32}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                      
                      <p style={{
                        fontFamily: "var(--font-vazirmatn)",
                        fontWeight: 600,
                        fontSize: 14,
                        lineHeight: "100%",
                        color: "#000000",
                        margin: 0
                      }}>
                        کانال رسمی بهلند
                      </p>
                    </div>
                    
                    {/* Blue Link - Right Side */}
                    <a
                      href="https://t.me/BehLand_Official"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--font-vazirmatn)",
                        fontWeight: 600,
                        fontSize: 14,
                        lineHeight: "100%",
                        color: "#1B60A6",
                        textDecoration: "none",
                        margin: 0
                      }}
                    >
                      @BehLand_Official
                    </a>
                  </div>
                </div>
                {/* Website Box */}
                <div style={{ marginBottom: 16 }}>
                  <div
                    style={{
                      display: "flex",
                      width: 360,
                      height: 48,
                      borderRadius: 8,
                      background: "#FFFFFF",
                      padding: 8,
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    {/* Icon and Text - Left Side */}
                    <div style={{ 
                      display: "flex",
                      alignItems: "center",
                      gap: 8
                    }}>
                      <div style={{ width: 32, height: 32 }}>
                        <Image
                          src="/Img/Browser.png"
                          alt="Website"
                          width={32}
                          height={32}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                      
                      <p style={{
                        fontFamily: "var(--font-vazirmatn)",
                        fontWeight: 600,
                        fontSize: 14,
                        lineHeight: "100%",
                        color: "#000000",
                        margin: 0
                      }}>
                        وب‌سایت بهلند
                      </p>
                    </div>
                    
                    {/* Blue Link - Right Side */}
                    <a
                      href="https://beh.land"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--font-vazirmatn)",
                        fontWeight: 600,
                        fontSize: 14,
                        lineHeight: "100%",
                        color: "#1B60A6",
                        textDecoration: "none",
                        margin: 0
                      }}
                    >
                      beh.land
                    </a>
                  </div>
                </div>

                {/* Mobile Registration Button */}
                <button
                  style={{
                    width: 360,
                    height: 48,
                    borderRadius: 8,
                    border: "2px solid #BD5300",
                    background: "#FFF9F3",
                    boxShadow: "0px 4px 0px 0px #CC6D14",
                    padding: "8px 24px",
                    gap: 8,
                    fontFamily: "var(--font-yekan-bakh)",
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    textAlign: "center",
                    color: "#BD5300",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                    opacity: 1
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
                    console.log("Navigate to registration form");
                  }}
                >
                  ثبت نام در رویداد
                </button>
              </div>
            </div>
          </section>



          {/* Decorative Calendar Image - Over the Box */}
          <div
            style={{
              position: "absolute",
              width: 480,
              height: 252,
              top: 673,
              left: 50,
              opacity: 1,
              zIndex: 15
            }}
          >
            <Image
              src="/Img/calendar-marked-date.png"
              alt="Decorative Calendar"
              width={480}
              height={252}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </main>
    );
  }

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
