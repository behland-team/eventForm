"use client";

import Image from "next/image";
import Banner from "@/assets/form-Banner.svg"
export default function FormPage() {
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API Place
  };

  return (
    <main className="lg:h-screen bg-white flex items-center justify-center p-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8  w-full max-w-[75rem] mx-auto">
        
        {/* Form Container */}
        <div className="lg:w-1/2">
          <div className="w-full flex flex-col gap-12  rounded-[16px] bg-[#FEECD8] shadow-[0px_0px_7px_0px_#00000040]  p-6 max-sm:pb-32">

            {/* Form Content Container */}
            <div className="w-full  flex flex-col gap-4">
              {/* Title */}
              <h1 className="font-lalezar font-normal text-[32px] lg:text-[40px] leading-tight text-right text-[#CC6D14] ">
                فرم ثبت نام در رویداد
              </h1>
                <p className="text-sm lg:text-base leading-relaxed text-justify text-[#292929]">
                    این رویداد فرصتی ارزشمند برای یادگیری و تبادل تجربه است.
                    با تکمیل فرم زیر، هم حضور خود را ثبت می‌کنید و هم می‌توانید سوالاتی که دوست دارید مطرح شوند را با ما در میان بگذارید. منتظر همراهی گرم شما هستیم.
                </p>
            </div>

              <div>
              {/* Form */}
              <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-8">
                <div className="flex flex-col gap-4 w-full ">
                  {/* First Row - Name and Email */}
                  <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
                    {/* Full Name */}
                    <div className="relative flex-1">
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        className=" w-full  px-6 py-3 rounded-lg border border-[#989898] bg-[#FFF9F3] font-[var(--font-vazirmatn)] text-[14px] text-right dir-rtl text-[#292929] placeholder:text-[#999999] focus:outline-none focus:border-[#CC6D14]"
                        placeholder="نام و نام خانوادگی"
                        required
                      />
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#B93E2E] text-lg font-bold">
                        *
                      </div>
                    </div>

                    {/* Email */}
                    <div className="relative flex-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className=" w-full h-[48px] px-6 py-3 rounded-lg border border-[#989898] bg-[#FFF9F3] font-[var(--font-vazirmatn)] text-[14px] text-right dir-rtl text-[#292929] placeholder:text-[#999999] focus:outline-none focus:border-[#CC6D14]"
                        placeholder="آدرس ایمیل"
                        required
                      />
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#B93E2E] text-lg font-bold">
                        *
                      </div>
                    </div>
                  </div>

                  {/* Second Row - Phone and Telegram */}
                  <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
                    {/* Phone */}
                    <div className="flex-1">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className=" w-full px-6 py-3 rounded-lg border border-[#989898] bg-[#FFF9F3] text-[14px] text-right dir-rtl text-[#292929] placeholder:text-[#999999] focus:outline-none focus:border-[#CC6D14]"
                        placeholder="شماره تلفن"
                      />
                    </div>

                    {/* Telegram ID */}
                    <div className="flex-1">
                      <input
                        id="telegramId"
                        name="telegramId"
                        type="text"
                        className="  w-full px-6 py-3 rounded-lg border border-[#989898] bg-[#FFF9F3] text-[14px] text-right dir-rtl text-[#292929] placeholder:text-[#999999] focus:outline-none focus:border-[#CC6D14]"
                        placeholder="آی دی تلگرام"
                      />
                    </div>
                  </div>
                </div>
                {/* Questions Section */}
                <div className="w-full space-y-6">
                  <p className="text-[14px] text-right text-[#292929]  ">
                    سوالاتتون رو میتونین از طریق باکس زیر مطرح کنید.
                  </p>
                  
                  <div className="w-full rounded-lg bg-[#FFF9F3] border border-[#989898]">
                    <textarea
                      id="question"
                      name="question"
                      rows={5}
                      className="w-full  px-4 py-3 rounded-lg border-0 bg-transparent text-[14px] text-right dir-rtl resize-none text-[#292929] placeholder:text-[#999999] focus:outline-none"
                      placeholder="سوالات شما..."
                    />
                  </div>
                    <button
                        type="submit"
                        className="py-3 px-8 mr-auto rounded-lg bg-[#FFF9F3] border-2 border-[#BD5300] shadow-[0px_4px_0px_0px_#CC6D14]  text-[16px] text-[#BD5300] cursor-pointer transition-all duration-200 ease-in-out flex items-center justify-center hover:translate-y-0.5 hover:shadow-[0px_2px_0px_0px_#CC6D14] active:translate-y-1 active:shadow-none"
                    >
                        ثبت اطلاعات
                    </button>
                </div>
                {/* Submit Button */}



              </form>
            </div>
          </div>
        </div>

        {/* Checklist Image*/}
        <div className="md:w-1/2 relative max-sm:h-100 max-sm:w-full">
            <Image
              src={Banner.src}
              alt="Checklist Illustration"
              width={579}
              height={783.66}
              className="max-sm:absolute max-sm:-top-32 object-contain opacity-100"
              priority
            />
        </div>
      </div>
    </main>
  )
}