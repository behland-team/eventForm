import Image from "next/image";
import Banner from "@/assets/event.webp";
import Link from "next/link";

export default function Home() {
  return (
    <main className="lg:h-screen bg-[#F0F4F9] overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row h-full lg:justify-center lg:items-center px-5 py-10 sm:px-10 md:px-20 xl:px-28 max-w-[85rem] mx-auto">
        <div className="lg:w-1/3 xl:w-1/2 relative">
          <Image
            src={Banner.src}
            alt="Full Picture"
            width={696}
            height={799}
            className="w-full h-full object-cover rounded-2xl"
            priority
            quality={60}
          />
        </div>

        {/* Main Card */}
        <section className="lg:w-2/3 xl:w-1/2 rounded-2xl bg-white shadow-[0px_0px_11px_0px_#00000025] relative flex flex-col justify-start items-center z-10 px-4 md:px-8 py-6">
          <div className="absolute size-12 left-2 -top-2  md:w-[6.5rem] md:h-[9.5rem] md:-top-[1rem] md:left-[1.5rem] z-10 opacity-100 flex items-start justify-start">
            <Image
              src="/Img/icon.svg"
              alt="Behland"
              width={169}
              height={151}
              className="w-full h-auto"
              priority
              quality={60}
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className=" font-bold text-2xl md:text-4xl leading-tight text-right text-[#4D4D4D] ">
              همراهان عزیز
              <span className={"text-[#4071B7]"}> به لند! </span>
            </h1>
            <p className="text-[#4D4D4D] text-justify  text-sm md:text-lg  lg:text-xl leading-6 md:leading-[2.5rem] font-medium ">
              دومین جلسه پرسش‌وپاسخ جامعه و سرمایه‌گذاران به‌لند، به مناسبت
              یک‌سالگی به‌لند و هفته مشارکت اجتماعی، به‌زودی برگزار می‌شود.
              <br />
              در این رویداد، می‌توانید پرسش‌های خود را درباره مسیر یادگیری، مدل
              اقتصادی، توکن BEHT و آینده به‌لند مطرح کنید و گزارش یک سال فعالیت،
              پیشرفت‌ها، چالش‌ها و برنامه‌های پیش‌رو را از تیم به‌لند بشنوید.
            </p>
          </div>
          <hr
            className=" h-4 my-6 w-full border-0 border-t border-dashed border-[#4D4D4D61]"
            style={{
              borderStyle: "dashed",
              borderWidth: "1px 0 0 0",
              borderImage: "none",
            }}
          />

          <div className="flex flex-col gap-4 w-full">
            {/* Event Info - با فاصله برابر از خط */}
            <div className=" flex items-center justify-between">
              <p className="text-center font-vazirmatn font-semibold text-[20px] leading-[100%] text-[#4D4D4D] opacity-100">
                بهلند : تحولی در یادگیری هدفمند
              </p>
              <span className="text-center font-vazirmatn font-semibold text-[20px] leading-[100%] text-[#4D4D4D] opacity-100 hidden sm:block">
                آنلاین | حضور آزاد و رایگان
              </span>
            </div>
            <div className="flex items-stretch sm:items-center gap-4 justify-between">
              <div className="sm:w-full   rounded-lg bg-white flex items-center max-md:justify-center p-4 shadow-lg w-1/2 ">
                <div className="flex items-center flex-col sm:flex-row  gap-2 ">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/Img/Calendar.png"
                      alt="Calendar"
                      width={48}
                      height={48}
                      className="w-full h-auto"
                      quality={60}
                    />
                  </div>
                  <div className="font-lalezar text-sm lg:text-lg leading-none text-center sm:text-right text-black">
                    جمعه ۲۳ مرداد ماه
                    <br />
                    <span className="text-xs sm:text-sm">
                      {" "}
                      ۱۴۰۵ (۲۱ اگوست ۲۰۲۶){" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-white flex items-center justify-center p-4 shadow-lg w-1/2 sm:w-fit">
                <div className="flex items-center gap-2 flex-col sm:flex-row">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/Img/Clock.png"
                      alt="Clock"
                      width={48}
                      height={48}
                      className="w-full h-auto"
                      quality={60}
                    />
                  </div>
                  <div className="font-lalezar text-sm lg:text-lg leading-none text-center sm:text-right text-black whitespace-nowrap">
                    <p> ساعت ۵ عصر</p>
                    <p className="sm:hidden opacity-90">
                      آنلاین | حضور آزاد و رایگان
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="l rounded-[8px] bg-white flex items-center justify-center shadow-lg p-4">
              {/* دیو داخلی: width: 560px, height: 48px, justify-content: space-between */}
              <div className="w-full  flex flex-col xs:flex-row xs:items-center justify-between gap-4">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/Img/letter.png"
                      alt="Telegram Channel"
                      width={48}
                      height={48}
                      className="w-full h-auto"
                      quality={60}
                    />
                  </div>
                  <span className="font-lalezar text-sm lg:text-lg leading-none text-black whitespace-nowrap">
                    کانال رسمی بهلند
                  </span>
                </div>
                <div className="text-left">
                  <a
                    href="https://t.me/BehLand_Official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1B60A6] no-underline font-lalezar font-semibold text-sm lg:text-lg leading-none hover:text-blue-800 transition-colors"
                  >
                    https://t.me/BehLand_Official
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-[8px] bg-white flex items-center justify-center shadow-lg p-4">
              {/* دیو داخلی: width: 560px, height: 48px, justify-content: space-between */}
              <div className="w-full flex flex-col xs:flex-row xs:items-center justify-between">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/Img/Browser.png"
                      alt="Website"
                      width={48}
                      height={48}
                      className="w-full h-auto"
                      quality={60}
                    />
                  </div>
                  <span className="font-lalezar text-sm lg:text-lg leading-none text-black whitespace-nowrap">
                    وب‌سایت بهلند
                  </span>
                </div>
                <div className="text-left">
                  <a
                    href="https://beh.land"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1B60A6] no-underline font-lalezar font-semibold text-sm lg:text-lg leading-none hover:text-blue-800 transition-colors"
                  >
                    https://beh.land
                  </a>
                </div>
              </div>
            </div>
            <Link
              href="/register"
              className="rounded-lg border-2 border-[#335A92] bg-[#4071B7] px-6 py-4 font-lalezar font-semibold text-base leading-none text-white cursor-pointer flex items-center justify-center transition-all duration-200 ease-in-out hover:translate-y-0.5 shadow-[0px_4px_#335A924] active:translate-y-1 active:shadow-none  no-underline"
            >
              ثبت نام در رویداد
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
