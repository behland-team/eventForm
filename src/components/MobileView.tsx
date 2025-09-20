"use client";

import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export default function MobileView() {
  return (
    <main className="min-h-screen bg-[#FFF6EC] p-0 m-0 overflow-x-hidden">
      <div className="relative w-full min-h-screen overflow-x-hidden">
        
        {/* Main Card */}
        <section className="w-[24.5rem] h-[42.1rem] absolute top-[4.375rem] left-1/2 transform -translate-x-1/2 rounded-2xl bg-[#FEECD8] shadow-[0px_0px_7px_0px_#00000040] flex flex-col p-4">
          
          {/* Hourglass Icon */}
          <div className="absolute w-[4.8rem] h-[7.2rem] top-[0.4rem] left-[1.2rem] rotate-[31.9deg] opacity-100 z-10">
            <Image src="/Img/hourglass.png" alt="Hourglass" width={77} height={115} className="w-full h-auto" priority />
          </div>

          {/* Title */}
          <div className="absolute w-[13.4rem] h-[3.1rem] top-[4.375rem] left-[10rem] opacity-100">
            <h1 className="font-lalezar font-normal text-3xl leading-none text-right text-[#CC6D14] m-0 p-0 w-full h-full flex items-center justify-end whitespace-nowrap">
              همراهان عزیز بهلند!
            </h1>
          </div>

          {/* Description */}
          <div className="absolute w-80 h-[7.5rem] top-[8.75rem] left-5 opacity-100">
            <p className="font-lalezar font-medium text-base leading-[1.875rem] text-justify text-[#292929] m-0 p-0">
              اولین جلسه‌ی پرسش و پاسخ (Ask Anything) در راه است. این رویداد فرصتی است برای اینکه تمام پرسش‌هایتان درباره‌ی مسیر یادگیری، اقتصاد توکنی و آینده‌ی بهلند را مطرح کنید.
            </p>
          </div>

          {/* Divider */}
          <div className="absolute w-80 h-px top-[17.5rem] left-5 bg-[#4D4D4D61] opacity-100" />

          {/* Subtitle */}
          <div className="absolute w-80 h-[1.875rem] top-[18.75rem] left-5 opacity-100">
            <p className="font-lalezar font-semibold text-base leading-none text-right text-[#4D4D4D] m-0 p-0 flex items-center justify-end">
              بهلند : تحولی در یادگیری هدفمند
            </p>
          </div>

          {/* Info Boxes */}
          <div className="mt-[16.875rem]">
            <div className="flex gap-5 mb-3">
              {/* Time Box */}
              <div className="w-[10.75rem] h-[7.25rem] rounded-lg bg-white p-4 flex flex-col items-center justify-center gap-2">
                <div className="w-12 h-12">
                  <Image src="/Img/Clock.png" alt="Clock" width={48} height={48} className="w-full h-auto" />
                </div>
                <div className="w-[5.375rem] h-[2.625rem] text-center">
                  <p className="font-lalezar font-semibold text-base leading-none text-black m-0">
                    ساعت ۶ عصر
                  </p>
                  <p className="font-lalezar font-normal text-xs leading-none text-black m-0 mt-1">
                    آنلاین | حضور آزاد
                  </p>
                </div>
              </div>

              {/* Date Box */}
              <div className="w-[11.125rem] h-[7.25rem] rounded-lg bg-white p-4 flex flex-col items-center justify-center gap-2">
                <div className="w-12 h-12">
                  <Image src="/Img/Calendar.png" alt="Calendar" width={48} height={48} className="w-full h-auto" />
                </div>
                <div className="w-[9.125rem] h-10 text-center">
                  <p className="font-lalezar font-semibold text-sm leading-none text-black m-0">
                    جمعه 4 مهرماه ۱۴۰۴
                  </p>
                  <p className="font-lalezar font-normal text-xs leading-none text-black m-0 mt-1">
                    (26 سپتامبر 2025)
                  </p>
                </div>
              </div>
            </div>

            {/* Telegram Box */}
            <div className="w-[22.5rem] h-20 rounded-lg bg-white flex items-center justify-between px-5 py-4 mb-3">
              <div className="flex items-center gap-3 flex-1 justify-end">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Image src="/Img/letter.png" alt="Telegram" width={48} height={48} className="w-full h-auto" />
                </div>
                <span className="font-lalezar font-semibold text-lg leading-none text-black whitespace-nowrap">
                  کانال رسمی بهلند
                </span>
              </div>
              <div className="flex-1 text-left">
                <a 
                  href="https://t.me/BehLand_Official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 no-underline font-lalezar font-semibold text-lg leading-none hover:text-blue-800 transition-colors"
                >
                  https://t.me/BehLand_Official
                </a>
              </div>
            </div>

            {/* Website Box */}
            <div className="w-[22.5rem] h-20 rounded-lg bg-white flex items-center justify-between px-5 py-4 mb-4">
              <div className="flex items-center gap-3 flex-1 justify-end">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Image src="/Img/Browser.png" alt="Website" width={48} height={48} className="w-full h-auto" />
                </div>
                <span className="font-lalezar font-semibold text-lg leading-none text-black whitespace-nowrap">
                  وب‌سایت بهلند
                </span>
              </div>
              <div className="flex-1 text-left">
                <a 
                  href="https://beh.land" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 no-underline font-lalezar font-semibold text-lg leading-none hover:text-blue-800 transition-colors"
                >
                  https://beh.land
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="w-[22.5rem] mb-4">
              <CTAButton width={360} height={48} text="ثبت نام در رویداد" className="w-full" />
            </div>
          </div>

        </section>

        {/* Background decorative image */}
        <div className="absolute w-full h-[31.25rem] top-[46.875rem] left-0 flex items-center justify-center opacity-100">
          <Image 
            src="/Img/calendar-marked-date.png" 
            alt="Calendar Background" 
            width={500} 
            height={500} 
            className="w-full max-w-md h-auto" 
            priority 
          />
        </div>

      </div>
    </main>
  );
}
