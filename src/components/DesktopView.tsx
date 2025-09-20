"use client";

import Image from "next/image";

export default function DesktopView() {
  return (
    <main className="h-screen bg-[#FFF6EC] overflow-hidden">
      <div className="flex h-screen">
        <div className="flex-1 min-w-0 flex items-center justify-center">
          <div className="relative">
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center relative">
          <section className="w-[696px] h-[799px] rounded-2xl bg-[#FEECD8] shadow-[0px_0px_7px_0px_#00000040] relative flex flex-col justify-start items-center">
            <div className="absolute w-[6.5rem] h-[9.5rem] -top-[4rem] -left-[2.5rem] z-10 -rotate-[15deg] opacity-100 flex items-start justify-start">
              <Image src="/Img/hourglass.png" alt="Hourglass" width={104} height={152} className="w-full h-auto" priority />
            </div>
            
            <div className="p-8 pt-56 w-full flex flex-col items-center">
              {/* Title */}
              <div className="mb-12 pr-8">
                <h1 className="font-lalezar font-normal text-5xl leading-tight text-right text-[#CC6D14]">
                  همراهان عزیز بهلند!
                </h1>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-[#292929] text-justify font-lalezar text-2xl leading-[3.5rem] font-medium">
                  اولین جلسه‌ی پرسش و پاسخ (Ask Anything) در راه است.
                  <br />
                  این رویداد فرصتی است برای اینکه تمام پرسش‌هایتان درباره‌ی مسیر
                  یادگیری، اقتصاد توکنی و آینده‌ی بهلند را مطرح کنید.
                </p>
              </div>

              {/* Divider */}
              <hr className="mb-6 border-dashed w-full border-[#4D4D4D61] border-t" />

              {/* Event Info */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full my-1">
                <p className="text-right font-lalezar font-semibold text-xl text-[#4D4D4D]">
                  بهلند : تحولی در یادگیری هدفمند
                </p>
                <span className="rounded-md px-3 py-1 text-[#4D4D4D] font-lalezar font-semibold text-xl">
                  آنلاین | حضور آزاد و رایگان
                </span>
              </div>

              {/* Info Boxes */}
              <div className="space-y-2 w-full flex flex-col items-center">
                <div className="flex gap-2 justify-center">
                  {/* Calendar Box */}
                  <div className="rounded-lg bg-white flex items-center justify-between p-4 shadow-lg w-[24.75rem] h-20">
                    <div className="flex items-center gap-3 flex-1 justify-end">
                      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <Image src="/Img/Calendar.png" alt="Calendar" width={48} height={48} className="w-full h-auto" />
                      </div>
                      <span className="font-lalezar font-semibold text-lg leading-none text-black whitespace-nowrap">
                        جمعه 4 مهرماه ۱۴۰۴ (۲۶ سپتامبر ۲۰۲۵)
                      </span>
                    </div>
                  </div>
                  {/* Clock Box */}
                  <div className="rounded-lg bg-white flex items-center justify-between p-4 shadow-lg w-[11.75rem] h-20">
                    <div className="flex items-center gap-3 flex-1 justify-end">
                      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <Image src="/Img/Clock.png" alt="Clock" width={48} height={48} className="w-full h-auto" />
                      </div>
                      <span className="font-lalezar font-semibold text-lg leading-none text-black whitespace-nowrap">
                        ساعت ۶ عصر
                      </span>
                    </div>
                  </div>
                </div>
              
                <div className="h-8" />
                {/* Telegram Box */}
                <div className="rounded-lg bg-white flex items-center justify-between p-4 shadow-lg w-[37.5rem] h-20 mt-2 mx-auto">
                  <div className="flex items-center gap-3 flex-none justify-end">
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Image src="/Img/letter.png" alt="Telegram Channel" width={48} height={48} className="w-full h-auto" />
                    </div>
                    <span className="font-lalezar font-semibold text-lg leading-none text-black whitespace-nowrap">
                      کانال رسمی بهلند
                    </span>
                  </div>
                  <div className="flex-1 text-left">
                    <a href="https://t.me/BehLand_Official" target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline font-lalezar font-semibold text-lg leading-none hover:text-blue-800 transition-colors">
                      https://t.me/BehLand_Official
                    </a>
                  </div>
                </div>
               
                <div className="h-10" />
                {/* Website Box */}
                <div className="rounded-lg bg-white flex items-center justify-between p-4 shadow-lg w-[37.5rem] h-20 mt-2 mx-auto">
                  <div className="flex items-center gap-3 flex-none justify-end">
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Image src="/Img/Browser.png" alt="Website" width={48} height={48} className="w-full h-auto" />
                    </div>
                    <span className="font-lalezar font-semibold text-lg leading-none text-black whitespace-nowrap">
                      وب‌سایت بهلند
                    </span>
                  </div>
                  <div className="flex-1 text-left">
                    <a href="https://beh.land" target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline font-lalezar font-semibold text-lg leading-none hover:text-blue-800 transition-colors">
                      https://beh.land
                    </a>
                  </div>
                </div>
                {/* فاصله مناسب دکمه */}
                <div className="h-8" />
                <div className="w-full flex justify-center">
                  <button className="rounded-lg border-2 border-[#BD5300] bg-[#FFF9F3] shadow-[0px_4px_0px_0px_#CC6D14] px-6 py-2 font-lalezar font-semibold text-base leading-none text-[#BD5300] cursor-pointer flex items-center justify-center transition-all duration-200 ease-in-out hover:translate-y-0.5 hover:shadow-[0px_2px_0px_0px_#CC6D14] active:translate-y-1 active:shadow-none w-[37.5rem] h-14">
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


