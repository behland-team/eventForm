"use client";

import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export default function EventView() {
  return (
    <main className="min-h-screen bg-[#FFF6EC] p-0 m-0 overflow-x-hidden">
      <div className="relative w-full min-h-screen">
        
        {/* Main Card - Responsive */}
        <section className="
          /* Mobile */
          w-[24.5rem] h-[42.1rem] absolute top-[4.375rem] left-1/2 transform -translate-x-1/2 
          /* Desktop */
          lg:w-[43.5rem] lg:h-[49.9375rem] lg:top-[8.5625rem] lg:left-[6.75rem] lg:transform-none
          /* Common */
          rounded-2xl bg-[#FEECD8] shadow-[0px_0px_7px_0px_#00000040] flex flex-col p-4 lg:p-0 relative
        ">
          
          {/* Hourglass Icon - Responsive positioning */}
          <div className="
            absolute z-10
            /* Mobile */
            w-[4.8rem] h-[7.2rem] top-[0.4rem] left-[1.2rem] rotate-[31.9deg]
            /* Desktop */
            lg:w-[7.42rem] lg:h-[10.98rem] lg:top-[2.06rem] lg:left-[4.98rem] lg:rotate-[28.58deg]
          ">
            <Image 
              src="/Img/hourglass.png" 
              alt="Hourglass" 
              width={118} 
              height={176} 
              className="w-full h-auto" 
              priority 
            />
          </div>

          {/* Title - Responsive */}
          <div className="
            absolute
            /* Mobile */
            w-[13.4rem] h-[3.1rem] top-[4.375rem] left-[10rem]
            /* Desktop */
            lg:w-[20.1875rem] lg:h-[4.6875rem] lg:top-[3rem] lg:left-[27.06rem]
          ">
            <h1 className="
              font-lalezar font-normal text-[#CC6D14] m-0 p-0 w-full h-full flex items-center justify-end text-right leading-none
              /* Mobile */
              text-3xl whitespace-nowrap
              /* Desktop */
              lg:text-5xl
            ">
              همراهان عزیز بهلند!
            </h1>
          </div>

          {/* Description - Responsive */}
          <div className="
            absolute
            /* Mobile */
            w-80 h-[7.5rem] top-[8.75rem] left-5
            /* Desktop */
            lg:w-[37.4375rem] lg:h-[8.4375rem] lg:top-[11.5rem] lg:left-[9.75rem]
          ">
            <p className="
              font-lalezar text-[#292929] m-0 p-0 text-justify
              /* Mobile */
              font-medium text-base leading-[1.875rem]
              /* Desktop */
              lg:font-medium lg:text-2xl lg:leading-[2.8125rem]
            ">
              اولین جلسه‌ی پرسش و پاسخ (Ask Anything) در راه است.
              این رویداد فرصتی است برای اینکه تمام پرسش‌هایتان درباره‌ی مسیر یادگیری، اقتصاد توکنی و آینده‌ی بهلند را مطرح کنید.
            </p>
          </div>

          {/* Divider Line - Responsive */}
          <div className="
            absolute bg-[#4D4D4D61] border-dashed border-t border-[#4D4D4D61]
            /* Mobile */
            w-80 h-px top-[17.5rem] left-5
            /* Desktop */
            lg:w-[37.5rem] lg:top-[27.6875rem] lg:left-[9.75rem]
          " />

          {/* Bottom Text Section - Responsive */}
          <div className="
            absolute flex justify-between items-center
            /* Mobile */
            w-80 top-[18.75rem] left-5
            /* Desktop */
            lg:w-[37.5rem] lg:top-[29.8125rem] lg:left-[9.75rem]
          ">
            {/* Right Text */}
            <div className="
              /* Mobile */
              w-auto h-[1.875rem]
              /* Desktop */
              lg:w-[16.3125rem] lg:h-[1.9375rem]
            ">
              <p className="
                font-lalezar font-semibold text-[#4D4D4D] m-0 p-0 text-right leading-none
                /* Mobile */
                text-base
                /* Desktop */
                lg:text-xl
              ">
                بهلند : تحولی در یادگیری هدفمند
              </p>
            </div>
            
            {/* Left Text */}
            <div className="
              /* Mobile */
              w-auto h-[1.875rem]
              /* Desktop */
              lg:w-[13.125rem] lg:h-[1.9375rem]
            ">
              <p className="
                font-lalezar font-semibold text-[#4D4D4D] m-0 p-0 text-left leading-none
                /* Mobile */
                text-base
                /* Desktop */
                lg:text-xl
              ">
                آنلاین | حضور آزاد و رایگان
              </p>
            </div>
          </div>

          {/* Info Boxes - Mobile */}
          <div className="lg:hidden">
            <div className="flex gap-4 mb-6 absolute top-[22rem] left-[2.5rem]">
              {/* Time Box - Mobile */}
              <div className="w-[10.75rem] h-[7.25rem] rounded-lg bg-white flex flex-col items-center justify-center gap-3 p-4">
                <div className="w-12 h-12">
                  <Image src="/Img/Clock.png" alt="Clock" width={48} height={48} className="w-full h-auto" />
                </div>
                <div className="text-center">
                  <p className="font-lalezar font-semibold text-base leading-none text-black m-0">
                    ساعت ۶ عصر
                  </p>
                  <p className="font-lalezar font-normal text-xs leading-none text-black m-0 mt-3">
                    آنلاین | حضور آزاد
                  </p>
                </div>
              </div>

              {/* Date Box - Mobile */}
              <div className="w-[11.125rem] h-[7.25rem] rounded-lg bg-white p-4 flex flex-col items-center justify-center gap-3">
                <div className="w-12 h-12">
                  <Image src="/Img/Calendar.png" alt="Calendar" width={48} height={48} className="w-full h-auto" />
                </div>
                <div className="text-center">
                  <p className="font-lalezar font-semibold text-sm leading-none text-black m-0">
                    جمعه 4 مهرماه ۱۴۰۴
                  </p>
                  <p className="font-lalezar font-normal text-xs leading-none text-black m-0 mt-3">
                    (26 سپتامبر 2025)
                  </p>
                </div>
              </div>
            </div>

            {/* Telegram Box - Mobile */}
            <div className="absolute w-[22.5rem] h-12 top-[32rem] left-[2.5rem] rounded-lg bg-white flex items-center justify-between p-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8">
                  <Image src="/Img/letter.png" alt="Telegram" width={32} height={32} className="w-full h-auto" />
                </div>
                <span className="font-lalezar font-semibold text-sm leading-none text-black">
                  کانال رسمی بهلند
                </span>
              </div>
              <div>
                <a 
                  href="https://t.me/BehLand_Official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#1B60A6] no-underline font-lalezar font-semibold text-sm leading-none"
                >
                  https://t.me/BehLand_Official
                </a>
              </div>
            </div>

            {/* Website Box - Mobile */}
            <div className="absolute w-[22.5rem] h-12 top-[36rem] left-[2.5rem] rounded-lg bg-white flex items-center justify-between p-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8">
                  <Image src="/Img/Browser.png" alt="Website" width={32} height={32} className="w-full h-auto" />
                </div>
                <span className="font-lalezar font-semibold text-sm leading-none text-black">
                  وب‌سایت بهلند
                </span>
              </div>
              <div>
                <a 
                  href="https://beh.land" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#1B60A6] no-underline font-lalezar font-semibold text-sm leading-none"
                >
                  https://beh.land
                </a>
              </div>
            </div>

            {/* CTA Button - Mobile */}
            <div className="absolute w-[22.5rem] top-[41rem] left-[2.5rem]">
              <CTAButton width={360} height={48} text="ثبت نام در رویداد" className="w-full" />
            </div>
          </div>

        </section>

        {/* Desktop Info Boxes */}
        <div className="hidden lg:block">
          {/* Clock Box - Desktop */}
          <div className="absolute w-[11.75rem] h-20 top-[37rem] left-[9.75rem] rounded-lg bg-white flex items-center gap-4 p-4">
            <div className="w-12 h-12">
              <Image src="/Img/Clock.png" alt="Clock" width={48} height={48} className="w-full h-auto" />
            </div>
            <div>
              <p className="font-lalezar font-semibold text-lg leading-none text-black m-0">
                ساعت ۶ عصر
              </p>
            </div>
          </div>

          {/* Calendar Box - Desktop */}
          <div className="absolute w-[24.75rem] h-20 top-[37rem] left-[22.5rem] rounded-lg bg-white flex items-center gap-4 p-4">
            <div className="w-12 h-12">
              <Image src="/Img/Calendar.png" alt="Calendar" width={48} height={48} className="w-full h-auto" />
            </div>
            <div>
              <p className="font-lalezar font-semibold text-lg leading-none text-black m-0">
                جمعه 4 مهرماه ۱۴۰۴ (۲۶ سپتامبر ۲۰۲۵)
              </p>
            </div>
          </div>

          {/* Telegram Box - Desktop */}
          <div className="absolute w-[37.5rem] h-20 top-[44.5rem] left-[9.75rem] rounded-lg bg-white flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <Image src="/Img/letter.png" alt="Telegram" width={48} height={48} className="w-full h-auto" />
              </div>
              <span className="font-lalezar font-semibold text-lg leading-none text-black">
                کانال رسمی بهلند
              </span>
            </div>
            <div>
              <a 
                href="https://t.me/BehLand_Official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#1B60A6] underline font-lalezar font-semibold text-lg leading-none"
              >
                https://t.me/BehLand_Official
              </a>
            </div>
          </div>

          {/* Website Box - Desktop */}
          <div className="absolute w-[37.5rem] h-20 top-[50.5rem] left-[9.75rem] rounded-lg bg-white flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <Image src="/Img/Browser.png" alt="Website" width={48} height={48} className="w-full h-auto" />
              </div>
              <span className="font-lalezar font-semibold text-lg leading-none text-black">
                وب‌سایت بهلند
              </span>
            </div>
            <div>
              <a 
                href="https://beh.land" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#1B60A6] underline font-lalezar font-semibold text-lg leading-none"
              >
                https://beh.land
              </a>
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="absolute w-[37.5rem] top-[57rem] left-[9.75rem]">
            <CTAButton width={600} height={56} text="ثبت نام در رویداد" className="w-full" />
          </div>
        </div>

        {/* Background decorative image - Mobile only */}
        <div className="absolute w-full h-[31.25rem] top-[46.875rem] left-0 flex items-center justify-center lg:hidden">
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
