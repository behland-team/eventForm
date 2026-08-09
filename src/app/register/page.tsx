"use client";

import Image from "next/image";
import Banner from "@/assets/form-Banner.webp";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

const FormSchema = z.object({
  fullName: z
    .string()
    .min(2, "نام باید حداقل 2 کاراکتر باشد")
    .max(80, "نام خیلی طولانی است"),
  email: z.email("ایمیل معتبر وارد کنید"),
  telegramId: z.string().optional(),
  phone: z.string().optional(),
  walletAddress: z
    .string()
    .max(500, "آدرس کیف پول خیلی طولانی است")
    .optional(),
  questions: z
    .string()
    .max(700, "سوال شما باید کمتر از 700 کاراکتر باشد")
    .optional(),
});
type FormValues = z.infer<typeof FormSchema>;

export default function FormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    mode: "onBlur",
  });

  const submitForm = async (data: FormValues) => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("مشکلی پیش آمده لطفا دوباره تلاش کنید");
      }

      const result: { emailSent?: boolean } = await response.json();

      toast.success(
        result.emailSent
          ? "اطلاعات شما با موفقیت ثبت شد و یک ایمیل تایید برایتان ارسال شد."
          : "اطلاعات شما با موفقیت ثبت شد، اما ایمیل تایید ارسال نشد.",
      );
      reset();
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : typeof error === "string"
            ? error
            : "خطایی در ثبت اطلاعات رخ داد.";
      toast.error(message);
    }

    // API Place
  };

  return (
    <main className="lg:h-screen bg-[#F0F4F9] flex items-center justify-center p-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8  w-full max-w-[75rem] mx-auto">
        {/* Form Container */}
        <div className="lg:w-1/2">
          <div className="w-full flex flex-col gap-12  rounded-[16px] bg-white shadow-[0px_0px_11px_0px_#00000025]  p-6 max-sm:pb-32 relative">
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
            {/* Form Content Container */}
            <div className="w-full  flex flex-col gap-4">
              {/* Title */}
              <h1 className="font-lalezar font-bold text-[28px] lg:text-[40px] leading-tight text-right text-[#4D4D4D]">
                فرم
                <span className={"text-[#335A92]"}> ثبت نام </span>
                 در رویداد
              </h1>
              <p className="text-sm lg:text-base leading-relaxed font-semibold text-justify text-[#4D4D4D]">
                این رویداد فرصتی ارزشمند برای یادگیری و تبادل تجربه است. با
                تکمیل فرم زیر، هم حضور خود را ثبت می‌کنید و هم می‌توانید سوالاتی
                که دوست دارید مطرح شوند را با ما در میان بگذارید. منتظر همراهی
                گرم شما هستیم.
              </p>
            </div>

            <div>
              {/* Form */}
              <form
                onSubmit={handleSubmit(submitForm)}
                className="w-full flex flex-col items-center gap-8"
              >
                <div className="flex flex-col gap-4 w-full ">
                  {/* First Row - Name and Email */}
                  <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
                    {/* Full Name */}
                    <div className="relative flex-1">
                      <input
                        id="fullName"
                        type="text"
                        className=" w-full  px-6 py-3 rounded-lg border border-[#F0F4F9] bg-[#F0F4F9] font-[var(--font-vazirmatn)] text-[14px] text-right dir-rtl text-[#292929] placeholder:text-[#999999] focus:outline-none focus:border-[#4071B7]"
                        placeholder="نام و نام خانوادگی"
                        {...register("fullName")}
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-1 font-[var(--font-yekan-bakh)]">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="relative flex-1">
                      <input
                        id="email"
                        type="text"
                        className=" w-full  px-6 py-3 rounded-lg border border-[#F0F4F9] bg-[#F0F4F9] font-[var(--font-vazirmatn)] text-[14px] text-right dir-rtl text-[#292929] placeholder:text-[#999999] focus:outline-none focus:border-[#4071B7]"
                        placeholder="آدرس ایمیل"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Second Row - Phone and Telegram */}
                  <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
                    {/* Phone */}
                    <div className="flex-1">
                      <input
                        id="phone"
                        type="tel"
                        className=" w-full  px-6 py-3 rounded-lg border border-[#F0F4F9] bg-[#F0F4F9] font-[var(--font-vazirmatn)] text-[14px] text-right dir-rtl text-[#292929] placeholder:text-[#999999] focus:outline-none focus:border-[#4071B7]"
                        placeholder="شماره تلفن"
                        {...register("phone")}
                      />
                    </div>

                    {/* Telegram ID */}
                    <div className="flex-1">
                      <input
                        id="telegramId"
                        type="text"
                        className=" w-full  px-6 py-3 rounded-lg border border-[#F0F4F9] bg-[#F0F4F9] font-[var(--font-vazirmatn)] text-[14px] text-right dir-rtl text-[#292929] placeholder:text-[#999999] focus:outline-none focus:border-[#4071B7]"
                        placeholder="آی دی تلگرام"
                        {...register("telegramId")}
                      />
                    </div>
                  </div>

                  {/* Third Row - Wallet Address */}
                  <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
                    <div className="flex-1">
                      <input
                        id="walletAddress"
                        type="text"
                        className="w-full px-6 py-3 rounded-lg border border-[#F0F4F9] bg-[#F0F4F9] font-[var(--font-vazirmatn)] text-[14px] text-right dir-rtl text-[#292929] placeholder:text-[#999999] focus:outline-none focus:border-[#4071B7]"
                        placeholder="آدرس کیف پول"
                        {...register("walletAddress")}
                      />
                      {errors.walletAddress && (
                        <p className="text-red-500 text-sm mt-1 font-[var(--font-yekan-bakh)]">
                          {errors.walletAddress.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {/* Questions Section */}
                <div className="w-full space-y-6">
                  <p className="text-[14px] text-right font-bold text-[#292929]  ">
                    سوالاتتون رو میتونین از طریق باکس زیر مطرح کنید.
                  </p>

                  <div className="w-full rounded-lg bg-[#F0F4F9] border border-[#F0F4F9] has-focus:border-[#4071B7]">
                    <textarea
                      id="question"
                      rows={5}
                      className="w-full  px-4 py-3 rounded-lg border-0 bg-transparent text-[14px] text-right dir-rtl resize-none text-[#292929] placeholder:text-[#999999] focus:outline-none"
                      placeholder="سوالات شما..."
                      {...register("questions")}
                    />
                  </div>
                  {errors.questions && (
                    <p className="text-red-500 text-sm mt-1 font-[var(--font-yekan-bakh)]">
                      {errors.questions.message}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="py-2 md:py-3 px-8 font-bold mr-auto rounded-lg bg-[#4071B7] border-2 border-[#335A92] shadow-[0px_4px_0px_0px_#335A92] text-[16px] text-white cursor-pointer transition-all duration-200 ease-in-out flex items-center justify-center hover:translate-y-0.5 hover:shadow-[0px_2px_0px_0px_#335A92] active:translate-y-1 active:shadow-none"
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
                 quality={60}
          />
        </div>
      </div>
    </main>
  );
}
