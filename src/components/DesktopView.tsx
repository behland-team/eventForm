"use client";

import Image from "next/image";

export default function DesktopView() {
  return (
    <main className="h-screen bg-[#FFF6EC] overflow-hidden">
      <div className="flex h-screen justify-center items-center">
        {/* Full Picture - مخفی در موبایل */}
        <div className="w-[696px] h-[799px] mr-4 hidden md:block">
          <Image 
            src="/Img/fullpic.png" 
            alt="Full Picture" 
            width={696} 
            height={799} 
            className="w-full h-full object-cover rounded-2xl" 
            priority 
          />
        </div>
        
        {/* Background Image برای موبایل */}
        <div className="absolute inset-0 flex items-center justify-center md:hidden">
          <Image 
            src="/Img/calendar-marked-date.png" 
            alt="Calendar Background" 
            width={500} 
            height={500} 
            className="w-full max-w-md h-auto opacity-30" 
            priority 
          />
        </div>
          {/* Main Card */}
        <section className="w-[696px] h-[799px] rounded-2xl bg-[#FEECD8] shadow-[0px_0px_7px_0px_#00000040] relative flex flex-col justify-start items-center z-10">
            <div className="absolute w-[6.5rem] h-[9.5rem] -top-[4rem] -left-[2.5rem] z-10 -rotate-[15deg] opacity-100 flex items-start justify-start">
              <Image src="/Img/hourglass.png" alt="Hourglass" width={104} height={152} className="w-full h-auto" priority />
            </div>
            
            <div className="px-8 py-6 w-full h-full flex flex-col">
              {/* Title و Description - تایتل بالای دیسکریپشن */}
              <div className="flex-1 flex flex-col justify-center items-center pt-16 px-8">
                {/* Title - بالای دیسکریپشن */}
                <div className="w-[599px] flex justify-start mb-8">
                  <h1 className="font-lalezar font-normal text-5xl leading-tight text-left text-[#CC6D14]">
                    همراهان عزیز بهلند!
                  </h1>
                </div>
                {/* Description - اندازه 2x بزرگتر */}
                <div className="w-[599px] h-[160px] mb-6">
                  <p className="text-[#292929] text-justify font-lalezar text-2xl leading-[2.5rem] font-medium">
                    اولین جلسه‌ی پرسش و پاسخ (Ask Anything) در راه است.
                    <br />
                    این رویداد فرصتی است برای اینکه تمام پرسش‌هایتان درباره‌ی مسیر یادگیری، اقتصاد توکنی و آینده‌ی بهلند را مطرح کنید.
                  </p>
                </div>

                {/* Divider - واقعاً وسط! */}
                <hr className=" h-4 my-6 w-[600px] border-0 border-t border-dashed border-[#4D4D4D61]" style={{ borderStyle: 'dashed', borderWidth: '1px 0 0 0', borderImage: 'none' }} />

                {/* Event Info - با فاصله برابر از خط */}
                <div className="mb-8 flex items-center justify-center gap-16">
                  <p className="w-[261px] h-[31px] text-center font-vazirmatn font-semibold text-[20px] leading-[100%] text-[#4D4D4D] opacity-100">
                    بهلند : تحولی در یادگیری هدفمند
                  </p>
                  <span className="w-[261px] h-[31px] text-center font-vazirmatn font-semibold text-[20px] leading-[100%] text-[#4D4D4D] opacity-100">
                    آنلاین | حضور آزاد و رایگان
                  </span>
                </div>

                {/* Info Boxes - در همان container، بالاتر */}
                <div className="space-y-3 w-full flex flex-col items-center">
                  <div className="flex gap-2 justify-center">
                    {/* Calendar Box - طبق مشخصات دقیق */}
                  <div className="w-full max-w-sm lg:w-[24.75rem] h-16 lg:h-20 rounded-lg bg-white flex items-center justify-center p-3 lg:p-4 shadow-lg">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
                        <Image src="/Img/Calendar.png" alt="Calendar" width={48} height={48} className="w-full h-auto" />
                      </div>
                      <span className="font-lalezar font-semibold text-sm lg:text-lg leading-none text-black">
                        جمعه 4 مهرماه ۱۴۰۴ (۲۶ سپتامبر ۲۰۲۵)
                      </span>
                    </div>
                  </div>
                  {/* Clock Box */}
                  <div className="rounded-lg bg-white flex items-center justify-center p-4 shadow-lg w-[11.75rem] h-20">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <Image src="/Img/Clock.png" alt="Clock" width={48} height={48} className="w-full h-auto" />
                      </div>
                      <span className="font-lalezar font-semibold text-lg leading-none text-black whitespace-nowrap">
                        ساعت ۶ عصر
                      </span>
                    </div>
                  </div>
                </div>
              
                <div className="h-4" />
                {/* Telegram Box - باکس اصلی: width: 600px, height: 80px, border-radius: 8px, background: #FFFFFF */}
                <div className="lg:w-[600px] h-16 lg:h-[80px] rounded-[8px] bg-white flex items-center justify-center shadow-lg">
                  {/* دیو داخلی: width: 560px, height: 48px, justify-content: space-between */}
                  <div className="w-full max-w-sm lg:w-[560px] h-10 lg:h-[48px] flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
                        <Image src="/Img/letter.png" alt="Telegram Channel" width={48} height={48} className="w-full h-auto" />
                      </div>
                      <span className="font-lalezar font-semibold text-sm lg:text-lg leading-none text-black whitespace-nowrap">
                        کانال رسمی بهلند
                      </span>
                    </div>
                    <div className="text-left">
                      <a href="https://t.me/BehLand_Official" target="_blank" rel="noopener noreferrer" className="text-[#1B60A6] no-underline font-lalezar font-semibold text-sm lg:text-lg leading-none hover:text-blue-800 transition-colors">
                        https://t.me/BehLand_Official
                      </a>
                    </div>
                  </div>
                </div>
               
                <div className="h-4" />
                {/* Website Box - باکس اصلی: width: 600px, height: 80px, border-radius: 8px, background: #FFFFFF */}
                <div className="lg:w-[600px] h-16 lg:h-[80px] rounded-[8px] bg-white flex items-center justify-center shadow-lg">
                  {/* دیو داخلی: width: 560px, height: 48px, justify-content: space-between */}
                  <div className="w-full max-w-sm lg:w-[560px] h-10 lg:h-[48px] flex items-center justify-between">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
                        <Image src="/Img/Browser.png" alt="Website" width={48} height={48} className="w-full h-auto" />
                      </div>
                      <span className="font-lalezar font-semibold text-sm lg:text-lg leading-none text-black whitespace-nowrap">
                        وب‌سایت بهلند
                      </span>
                    </div>
                    <div className="text-left">
                      <a href="https://beh.land" target="_blank" rel="noopener noreferrer" className="text-[#1B60A6] no-underline font-lalezar font-semibold text-sm lg:text-lg leading-none hover:text-blue-800 transition-colors">
                        https://beh.land
                      </a>
                    </div>
                  </div>
                </div>
                {/* فاصله مناسب دکمه */}
                <div className="h-5" />
                <div className="w-full flex justify-center">
                  <a href="/register" className="rounded-lg border-2 border-[#BD5300] bg-[#FFF9F3] shadow-[0px_4px_0px_0px_#CC6D14] px-6 py-2 font-lalezar font-semibold text-base leading-none text-[#BD5300] cursor-pointer flex items-center justify-center transition-all duration-200 ease-in-out hover:translate-y-0.5 hover:shadow-[0px_2px_0px_0px_#CC6D14] active:translate-y-1 active:shadow-none w-[37.5rem] h-14 no-underline">
                    ثبت نام در رویداد
                  </a>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </div>
    </main>
  );
}


