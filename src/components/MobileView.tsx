"use client";

import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export default function MobileView() {
  return (
    <main style={{ minHeight: "100vh", background: "#FFF6EC", padding: "0", margin: "0", overflowX: "hidden" }}>
      <div style={{ position: "relative", width: "100%", minHeight: "100vh", overflowX: "hidden" }}>
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
            <Image src="/Img/hourglass.png" alt="Hourglass" width={77} height={115} style={{ width: "100%", height: "auto" }} priority />
          </div>

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

          <div style={{ position: "relative" }}>
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

            <div style={{ marginTop: 270 }}>
              <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
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
                    <Image src="/Img/Clock.png" alt="Clock" width={48} height={48} style={{ width: "100%", height: "auto" }} />
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
                    <Image src="/Img/Calendar.png" alt="Calendar" width={48} height={48} style={{ width: "100%", height: "auto" }} />
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
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 32, height: 32 }}>
                      <Image src="/Img/letter.png" alt="Telegram Channel" width={32} height={32} style={{ width: "100%", height: "auto" }} />
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

                  <a href="https://t.me/BehLand_Official" target="_blank" rel="noopener noreferrer" style={{
                    fontFamily: "var(--font-vazirmatn)",
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "100%",
                    color: "#1B60A6",
                    textDecoration: "none",
                    margin: 0
                  }}>
                    @BehLand_Official
                  </a>
                </div>
              </div>

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
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 32, height: 32 }}>
                      <Image src="/Img/Browser.png" alt="Website" width={32} height={32} style={{ width: "100%", height: "auto" }} />
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

                  <a href="https://beh.land" target="_blank" rel="noopener noreferrer" style={{
                    fontFamily: "var(--font-vazirmatn)",
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "100%",
                    color: "#1B60A6",
                    textDecoration: "none",
                    margin: 0
                  }}>
                    beh.land
                  </a>
                </div>
              </div>

              <CTAButton width={360} height={48} fontFamily="var(--font-yekan-bakh)" fontWeight={600} fontSize={16} text="ثبت نام در رویداد" />
            </div>
          </div>
        </section>

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
          <Image src="/Img/calendar-marked-date.png" alt="Decorative Calendar" width={480} height={252} style={{ width: "100%", height: "auto" }} />
        </div>
      </div>
    </main>
  );
}


