"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

const FormSchema = z.object({
  fullName: z
    .string()
    .min(2, "نام باید حداقل 2 کاراکتر باشد")
    .max(80, "نام خیلی طولانی است"),
  email: z.string().email("ایمیل معتبر وارد کنید"),
  phone: z.string().optional(),
  telegramId: z.string().optional(),
  question: z
    .string()
    .max(600, "سوال شما باید کمتر از 600 کاراکتر باشد")
    .optional(),
});

type FormValues = z.infer<typeof FormSchema>;

export default function FormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(FormSchema), mode: "onBlur" });

  async function onSubmit(values: FormValues) {
    try {
      // Here you'll connect to your company's API
      console.log("Form data:", values);
      
      // Simulate API call
      await new Promise((r) => setTimeout(r, 1000));
      
      alert(`ممنون ${values.fullName}! اطلاعات شما با موفقیت ثبت شد.`);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("خطایی در ثبت اطلاعات رخ داد. لطفاً دوباره تلاش کنید.");
    }
  }

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 w-full max-w-6xl">
        
        {/* Form Container - طبق مشخصات Figma */}
        <div className="order-1 lg:order-1 flex-shrink-0">
          <div className="w-full max-w-md lg:w-[673px] lg:h-[798px] rounded-[16px] bg-[#FEECD8] shadow-[0px_0px_7px_0px_#00000040] opacity-100 flex items-center justify-center">

            {/* Form Content Container - طبق مشخصات Figma */}
            <div className="w-full lg:w-[673px] lg:h-[716px] rounded-[8px] opacity-100 p-6 lg:p-8">

              {/* Title - طبق مشخصات Figma */}
              <h1 className="font-lalezar font-normal text-[32px] lg:text-[48px] leading-tight text-right text-[#CC6D14] mb-4">
                فرم ثبت نام در رویداد
              </h1>

              {/* Description */}
              <p className="font-[var(--font-vazirmatn)] font-medium text-[14px] lg:text-[16px] leading-relaxed text-justify text-[#292929] mb-6">
                این رویداد فرصتی ارزشمند برای یادگیری و تبادل تجربه است.
                با تکمیل فرم زیر، هم حضور خود را ثبت می‌کنید و هم می‌توانید سوالاتی که دوست دارید مطرح شوند را با ما در میان بگذارید. منتظر همراهی گرم شما هستیم.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-3 mb-5">
                  {/* Full Name - طبق مشخصات Figma */}
                  <div className="relative">
                    <input
                      id="fullName"
                      type="text"
                      {...register("fullName")}
                      className="w-full lg:w-[295px] h-[48px] px-6 py-3 rounded-lg border border-[#989898] bg-[#FFF9F3] font-[var(--font-vazirmatn)] text-[14px] text-right dir-rtl text-[#292929] placeholder:text-[#999999] focus:outline-none focus:border-[#CC6D14]"
                      placeholder="نام و نام خانوادگی"
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#B93E2E] text-lg font-bold">
                      *
                    </div>
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1 text-right font-[var(--font-vazirmatn)]">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Email - طبق مشخصات Figma */}
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="w-full lg:w-[295px] h-[48px] px-6 py-3 rounded-lg border border-[#989898] bg-[#FFF9F3] font-[var(--font-vazirmatn)] text-[14px] text-right dir-rtl text-[#292929] placeholder:text-[#999999] focus:outline-none focus:border-[#CC6D14]"
                      placeholder="آدرس ایمیل"
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#B93E2E] text-lg font-bold">
                      *
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 text-right font-[var(--font-vazirmatn)]">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone - طبق مشخصات Figma */}
                  <div>
                    <input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className="w-full lg:w-[295px] h-[48px] px-6 py-3 rounded-lg border border-[#989898] bg-[#FFF9F3] font-[var(--font-vazirmatn)] text-[14px] text-right dir-rtl text-[#292929] placeholder:text-[#999999] focus:outline-none focus:border-[#CC6D14]"
                      placeholder="شماره تلفن"
                    />
                  </div>

                  {/* Telegram ID - طبق مشخصات Figma */}
                  <div>
                    <input
                      id="telegramId"
                      type="text"
                      {...register("telegramId")}
                      className="w-full lg:w-[295px] h-[48px] px-6 py-3 rounded-lg border border-[#989898] bg-[#FFF9F3] font-[var(--font-vazirmatn)] text-[14px] text-right dir-rtl text-[#292929] placeholder:text-[#999999] focus:outline-none focus:border-[#CC6D14]"
                      placeholder="آی دی تلگرام"
                    />
                  </div>
                </div>

                {/* Questions Section */}
                <div className="mb-6">
                  <p className="font-[var(--font-vazirmatn)] font-medium text-[14px] text-right text-[#292929] mb-4">
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
                      rows={6}
                      {...register("question")}
                      className="w-full h-[120px] px-4 py-3 rounded-lg border-0 bg-transparent font-[var(--font-vazirmatn)] text-[14px] text-right dir-rtl resize-none text-[#292929] placeholder:text-[#999999] focus:outline-none"
                      placeholder="سوالات خود را اینجا بنویسید..."
                    />
                    {errors.question && (
                      <p className="text-red-500 text-xs mt-2 text-right font-[var(--font-vazirmatn)]">
                        {errors.question.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-center mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-[150px] h-[50px] rounded-lg bg-[#FFF9F3] border-2 border-[#BD5300] shadow-[0px_4px_0px_0px_#CC6D14] font-[var(--font-vazirmatn)] font-semibold text-[16px] text-[#BD5300] cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 transition-all duration-200 ease-in-out flex items-center justify-center hover:translate-y-0.5 hover:shadow-[0px_2px_0px_0px_#CC6D14] active:translate-y-1 active:shadow-none"
                  >
                    {isSubmitting ? "در حال ثبت..." : "ثبت اطلاعات"}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>

        {/* Checklist Image - طبق مشخصات Figma */}
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
  );
}
