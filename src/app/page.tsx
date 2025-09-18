export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF6EC] py-10">
      <div className="container-safe">
        <div
          className="mx-auto"
          style={{ width: 696 }}
        >
          <section
            className="rounded-2xl shadow-[0_0_7px_0_#00000040]"
            style={{ background: "#FEECD8", height: 799 }}
          >
            <div className="p-6 sm:p-8">
              <div
                className="rounded-xl px-4 sm:px-6 py-4 text-right"
                style={{ background: "#CC6D14", width: 323, height: 75, marginInlineStart: "auto" }}
              >
                <h1
                  className="text-white"
                  style={{ fontFamily: "var(--font-lalezar)", fontSize: 48, lineHeight: "100%" }}
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
                style={{ width: 600, borderColor: "#4D4D4D61", borderWidth: 1, borderStyle: "dashed" as const }}
              />

              <div className="mt-4 flex items-center justify-between" style={{ width: 600 }}>
                <p
                  className="text-right"
                  style={{ fontFamily: "var(--font-vazirmatn)", fontWeight: 600, fontSize: 20 }}
                >
                  بهلند : تحولی در یادگیری هدفمند
                </p>
                <span
                  className="text-white rounded-md px-3 py-1"
                  style={{ background: "#4D4D4D", fontFamily: "var(--font-vazirmatn)", fontWeight: 600, fontSize: 20 }}
                >
                  آنلاین | حضور آزاد و رایگان
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
