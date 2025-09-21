"use client";

import Image from "next/image";

export default function FormPage() {
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API Place
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 w-full max-w-6xl">
        
        {/* Form Container */}
        <div className="p-6 order-1 lg:order-1 flex-shrink-0">
          <div className="w-full max-w-md lg:w-[900px] lg:h-[720px] rounded-[16px] bg-[#FEECD8] shadow-[0px_0px_7px_0px_#00000040] opacity-100 flex items-center justify-center p-6">

            {/* Form Content Container */}
            <div className="w-full lg:w-[830px] lg:h-[650px] rounded-[8px] opacity-100 p-8 lg:p-20 bg-[#FEECD8]">

              {/* Title */}
              <h1 className="font-lalezar font-normal text-[32px] lg:text-[40px] leading-tight text-right text-[#CC6D14] mb-5 lg:mb-4">
                فرم ثبت نام در رویداد
              </h1>

              {/* Description */}
              <p className="font-[var(--font-vazirmatn)] font-medium text-[14px] lg:text-[15px] leading-relaxed text-justify text-[#292929] mb-5 lg:mb-6">
                این رویداد فرصتی ارزشمند برای یادگیری و تبادل تجربه است.
                با تکمیل فرم زیر، هم حضور خود را ثبت می‌کنید و هم می‌توانید سوالاتی که دوست دارید مطرح شوند را با ما در میان بگذارید. منتظر همراهی گرم شما هستیم.
              </p>

              <div className="h-15" />

              {/* Form */}
              <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
                <div className="flex flex-col gap-4 mb-5 w-full max-w-2xl">
                  {/* First Row - Name and Email */}
                  <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
                    {/* Full Name */}
                    <div className="relative flex-1">
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        className="text-center placeholder:text-center w-full h-[48px] px-6 py-3 rounded-lg border border-[#989898] bg-[#FFF9F3] font-[var(--font-vazirmatn)] text-[14px] text-right dir-rtl text-[#292929] placeholder:text-[#999999] focus:outline-none focus:border-[#CC6D14]"
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
                        className="text-center placeholder:text-center w-full h-[48px] px-6 py-3 rounded-lg border border-[#989898] bg-[#FFF9F3] font-[var(--font-vazirmatn)] text-[14px] text-right dir-rtl text-[#292929] placeholder:text-[#999999] focus:outline-none focus:border-[#CC6D14]"
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
                        className="text-center placeholder:text-center w-full h-[48px] px-6 py-3 rounded-lg border border-[#989898] bg-[#FFF9F3] font-[var(--font-vazirmatn)] text-[14px] text-right dir-rtl text-[#292929] placeholder:text-[#999999] focus:outline-none focus:border-[#CC6D14]"
                        placeholder="شماره تلفن"
                      />
                    </div>

                    {/* Telegram ID */}
                    <div className="flex-1">
                      <input
                        id="telegramId"
                        name="telegramId"
                        type="text"
                        className="text-center placeholder:text-center w-full h-[48px] px-6 py-3 rounded-lg border border-[#989898] bg-[#FFF9F3] font-[var(--font-vazirmatn)] text-[14px] text-right dir-rtl text-[#292929] placeholder:text-[#999999] focus:outline-none focus:border-[#CC6D14]"
                        placeholder="آی دی تلگرام"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-25" />
                {/* Questions Section */}
                <div className="mb-5 w-full max-w-2xl">
                  <p className="font-[var(--font-vazirmatn)] font-medium text-[14px] text-right text-[#292929] mb-3">
                    سوالاتتون رو میتونین از طریق باکس زیر مطرح کنید.
                  </p>
                  
                  <div className="w-full rounded-lg bg-[#FFF9F3] border border-[#989898] p-4">
                    <div className="text-right mb-3">
                      <span className="font-[var(--font-vazirmatn)] font-medium text-[12px] text-[#999999]">
                        سوالات شما
                      </span>
                    </div>
                    <textarea
                      id="question"
                      name="question"
                      rows={4}
                      className="w-full h-[80px] px-4 py-3 rounded-lg border-0 bg-transparent font-[var(--font-vazirmatn)] text-[14px] text-right dir-rtl resize-none text-[#292929] placeholder:text-[#999999] focus:outline-none"
                      placeholder="سوالات خود را اینجا بنویسید..."
                    />
                  </div>
                </div>
                <div className="h-8" />

                {/* Submit Button */}
                <div className="flex items-center justify-center mt-6 lg:mt-8">
                  <button
                    type="submit"
                    className="w-[150px] h-[50px] rounded-lg bg-[#FFF9F3] border-2 border-[#BD5300] shadow-[0px_4px_0px_0px_#CC6D14] font-[var(--font-vazirmatn)] font-semibold text-[16px] text-[#BD5300] cursor-pointer transition-all duration-200 ease-in-out flex items-center justify-center hover:translate-y-0.5 hover:shadow-[0px_2px_0px_0px_#CC6D14] active:translate-y-1 active:shadow-none"
                  >
                    ثبت اطلاعات
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>

        {/* Checklist Image*/}
        <div className="order-2 lg:order-2 flex-shrink-0">
          <div className="w-full max-w-sm lg:w-[579px] lg:h-[783.66px]">
            <Image
              src="/Img/Checklist.png"
              alt="Checklist Illustration"
              width={579}
              height={783.66}
              className="w-full lg:w-[579px] lg:h-[783.66px] object-contain opacity-100"
              priority
            />
          </div>
        </div>
        
      </div>
    </main>
  )
}