"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";

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
    <main className="min-h-screen bg-[#FFF6EC] p-0 m-0">
      <div className="flex h-screen p-0 m-0 gap-0 flex-col lg:flex-row">
        {/* Left Side - Form Container */}
        <div className="flex-1 flex items-center justify-center lg:justify-end relative bg-[#FFF6EC] border-4 border-[#FFFFFF3D] px-4 lg:pr-12 py-8">
          <div className="w-full max-w-lg lg:w-[42rem] lg:h-[50rem] rounded-2xl bg-[#FEECD8] shadow-[0px_0px_7px_0px_#00000040] p-6 lg:p-10 flex flex-col items-end relative">
            
          {/* Title */}
          <h1 className="w-full lg:w-[21.6rem] h-auto font-[var(--font-lalezar)] font-normal text-2xl lg:text-5xl leading-tight lg:leading-none text-left text-[#CC6D14] m-0 mb-4 lg:mb-6 self-start">
            فرم ثبت نام در رویداد
          </h1>

          {/* Description */}
          <p className="w-full lg:w-[37.4rem] h-auto font-[var(--font-vazirmatn)] font-medium text-sm lg:text-base leading-relaxed lg:leading-8 text-justify text-[#292929] m-0 mb-6 lg:mb-8">
            این رویداد فرصتی ارزشمند برای یادگیری و تبادل تجربه است.
            با تکمیل فرم زیر، هم حضور خود را ثبت می‌کنید و هم می‌توانید سوالاتی که دوست دارید مطرح شوند را با ما در میان بگذارید. منتظر همراهی گرم شما هستیم.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 mb-4 lg:mb-5">
              {/* Full Name */}
              <div className="flex flex-col items-end relative">
                <input
                  id="fullName"
                  type="text"
                  {...register("fullName")}
                  className="w-full lg:w-[18.4rem] h-12 px-4 lg:px-6 py-3 rounded-lg border border-[#989898] bg-[#FFF9F3] font-[var(--font-yekan-bakh)] text-sm text-right dir-rtl text-[#292929] placeholder:text-[#999999]"
                  placeholder="نام و نام خانوادگی"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#B93E2E] text-sm font-[var(--font-yekan-bakh)] font-semibold">
                  *
                </div>
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1 font-[var(--font-yekan-bakh)]">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col items-end relative">
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="w-full lg:w-[18.4rem] h-12 px-4 lg:px-6 py-3 rounded-lg border border-[#989898] bg-[#FFF9F3] font-[var(--font-yekan-bakh)] text-sm text-right dir-rtl text-[#292929] placeholder:text-[#999999]"
                  placeholder="آدرس ایمیل"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#B93E2E] text-sm font-[var(--font-yekan-bakh)] font-semibold">
                  *
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 font-[var(--font-yekan-bakh)]">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col items-end">
                <input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  className="w-full lg:w-[18.4rem] h-12 px-4 lg:px-6 py-3 rounded-lg border border-[#989898] bg-[#FFF9F3] font-[var(--font-yekan-bakh)] text-sm text-right dir-rtl text-[#292929] placeholder:text-[#999999]"
                  placeholder="شماره تلفن"
                />
              </div>

              {/* Telegram ID */}
              <div className="flex flex-col items-end">
                <input
                  id="telegramId"
                  type="text"
                  {...register("telegramId")}
                  className="w-full lg:w-[18.4rem] h-12 px-4 lg:px-6 py-3 rounded-lg border border-[#989898] bg-[#FFF9F3] font-[var(--font-yekan-bakh)] text-sm text-right dir-rtl text-[#292929] placeholder:text-[#999999]"
                  placeholder="آی دی تلگرام"
                />
              </div>
            </div>

            {/* Questions Section */}
            <div className="mb-6 lg:mb-8">
              <p className="w-full lg:w-[21.9rem] h-auto font-[var(--font-yekan-bakh)] font-semibold text-base leading-none text-justify text-[#292929] mb-3 lg:mb-4">
                سوالاتتون رو میتونین از طریق باکس زیر مطرح کنید.
              </p>
              
              <div className="w-full lg:w-[38.1rem] h-auto lg:h-[12.9rem] rounded-lg bg-[#FFF9F3] border border-[#989898] p-4 lg:p-6 flex flex-col items-end gap-2">
                <span className="font-[var(--font-yekan-bakh)] font-semibold text-sm leading-none text-justify text-[#999999] mb-2">
                  سوالات شما
                </span>
                <textarea
                  id="question"
                  rows={5}
                  {...register("question")}
                  className="w-full h-24 lg:h-[7.5rem] px-3 lg:px-4 py-3 rounded-lg border border-gray-300 font-[var(--font-yekan-bakh)] text-sm text-right dir-rtl resize-y bg-transparent text-[#292929] placeholder:text-[#999999]"
                  placeholder="سوالات خود را اینجا بنویسید..."
                />
                {errors.question && (
                  <p className="text-red-500 text-sm mt-1 font-[var(--font-yekan-bakh)]">
                    {errors.question.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 w-full">
              <Link 
                href="/" 
                className="text-sm text-[#666666] hover:text-[#333333] font-[var(--font-yekan-bakh)] transition-colors duration-200"
              >
                بازگشت به صفحه اصلی
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-32 lg:w-38 h-12 rounded-lg bg-[#FFF9F3] border-2 border-[#BD5300] shadow-[0px_4px_0px_0px_#CC6D14] px-4 lg:px-6 py-2 font-[var(--font-yekan-bakh)] font-semibold text-base leading-none text-justify text-[#BD5300] cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 transition-all duration-200 ease-in-out flex items-center justify-center hover:translate-y-0.5 hover:shadow-[0px_2px_0px_0px_#CC6D14] active:translate-y-1 active:shadow-none"
              >
                {isSubmitting ? "در حال ثبت..." : "ثبت اطلاعات"}
              </button>
            </div>

          </form>
          </div>
        </div>

        {/* Right Side - Checklist Image */}
        <div className="flex-1 flex items-center justify-start bg-[#FFF6EC] relative border-4 border-[#FFFFFF3D] pl-8 lg:pl-12 hidden lg:flex">
          <div className="relative w-full max-w-md lg:w-[36.2rem] lg:h-[49rem] -ml-16 lg:-ml-24 z-2">
            <Image 
              src="/Img/Checklist.png" 
              alt="Checklist Illustration" 
              width={579} 
              height={784} 
              className="w-full h-auto max-w-full"
              priority 
            />
          </div>
        </div>
      </div>
    </main>
  );
}
