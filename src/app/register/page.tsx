"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Banner from "@/assets/form-Banner.webp";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

const FormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "نام باید حداقل 2 کاراکتر باشد")
    .max(80, "نام خیلی طولانی است"),
  email: z.string().trim().pipe(z.email("ایمیل معتبر وارد کنید")),
  phone: z.string().trim().max(30, "شماره تماس خیلی طولانی است").optional(),
});
type FormValues = z.infer<typeof FormSchema>;

export default function FormPage() {
  const [assignedCode, setAssignedCode] = useState<string | null>(null);
  const requestKey = useRef<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    mode: "onBlur",
  });

  const submitForm = async (data: FormValues) => {
    if (assignedCode) return;
    requestKey.current ??= crypto.randomUUID();
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, requestKey: requestKey.current }),
      });
      const result: { code?: string; emailSent?: boolean; error?: string } =
        await response.json();
      if (!response.ok) {
        throw new Error(result.error || "مشکلی پیش آمده لطفا دوباره تلاش کنید");
      }
      if (!result.code || !/^\d{5}$/.test(result.code)) {
        throw new Error("کد دریافت نشد. لطفاً دوباره تلاش کنید.");
      }
      setAssignedCode(result.code);

      toast.success(
        result.emailSent
          ? "اطلاعات شما با موفقیت ثبت شد و یک ایمیل تایید برایتان ارسال شد."
          : "اطلاعات شما با موفقیت ثبت شد، اما ایمیل تایید ارسال نشد.",
      );
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : typeof error === "string"
            ? error
            : "خطایی در ثبت اطلاعات رخ داد.";
      toast.error(message);
    }
  };

  return (
    <main className="min-h-screen bg-[#F0F4F9] flex items-center justify-center p-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8  w-full max-w-[75rem] mx-auto">
        {/* Form Container */}
        <div className="w-full lg:w-1/2">
          <div className="w-full flex flex-col gap-8 rounded-[16px] bg-white shadow-[0px_0px_11px_0px_#00000025]  p-6 relative">
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
                بازدیدکنندگان نمایشگاه
              </h1>
              <p className="text-sm lg:text-base leading-relaxed font-semibold text-justify text-[#4D4D4D]">
                به غرفه به‌لند خوش آمدید! برای آشنایی بیشتر با به‌لند و دریافت
                اخبار و اطلاع‌رسانی‌های ما، اطلاعات تماس خود را در فرم زیر ثبت
                کنید. خوشحالیم که در نمایشگاه همراه ما هستید.
              </p>
            </div>

            <div>
              {assignedCode ? (
                <div
                  className="flex flex-col gap-6"
                  role="status"
                  aria-live="polite"
                >
                  <div className="rounded-xl bg-[#F0F4F9] p-6 text-center">
                    <h2 className="text-lg font-bold text-[#335A92]">
                      اطلاعات شما با موفقیت ثبت شد
                    </h2>
                    <p className="mt-3 text-[#4D4D4D]">کد اختصاصی شما</p>
                    <p
                      dir="ltr"
                      className="my-4 text-4xl font-bold tracking-[0.3em] text-[#335A92]"
                    >
                      {assignedCode}
                    </p>
                    <p className="text-sm leading-7 text-[#4D4D4D]">
                      این کد فقط به شما تعلق دارد. برای استفاده در پنل، آن را
                      نگه دارید.
                    </p>
                  </div>
                  <a
                    href="https://t.me/behland_bot?start"
                    className="rounded-lg bg-[#4071B7] border-2 border-[#335A92] py-3 px-8 text-center font-bold text-white"
                  >
                    پنل یوزر
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(submitForm)}
                  className="w-full flex flex-col items-center gap-8"
                >
                  <div className="flex flex-col gap-4 w-full ">
                    <div className="w-full">
                      <label
                        htmlFor="fullName"
                        className="block mb-2 text-sm font-semibold text-[#292929]"
                      >
                        نام و نام خانوادگی *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        autoComplete="name"
                        required
                        aria-required="true"
                        placeholder="نام و نام خانوادگی"
                        className="w-full px-6 py-3 rounded-lg border border-[#F0F4F9] bg-[#F0F4F9] text-[14px] text-right text-[#292929] placeholder:text-[#999999] focus:outline-none focus:border-[#4071B7]"
                        {...register("fullName")}
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>
                
                    <div className="w-full">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-semibold text-[#292929]"
                      >
                        ایمیل *
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        required
                        aria-required="true"
                        placeholder="ایمیل"
                        className="w-full px-6 py-3 rounded-lg border border-[#F0F4F9] bg-[#F0F4F9] text-[14px] text-right text-[#292929] placeholder:text-[#999999] focus:outline-none focus:border-[#4071B7]"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                      </div>
                          <div className="w-full">
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-semibold text-[#292929]"
                      >
                        شماره تماس
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="شماره تماس"
                        className="w-full px-6 py-3 rounded-lg border border-[#F0F4F9] bg-[#F0F4F9] text-[14px] text-right text-[#292929] placeholder:text-[#999999] focus:outline-none focus:border-[#4071B7]"
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="py-2 md:py-3 px-8 font-bold mr-auto rounded-lg bg-[#4071B7] border-2 border-[#335A92] shadow-[0px_4px_0px_0px_#335A92] text-[16px] text-white cursor-pointer transition-all duration-200 ease-in-out flex items-center justify-center hover:translate-y-0.5 hover:shadow-[0px_2px_0px_0px_#335A92] active:translate-y-1 active:shadow-none"
                    >
                      {isSubmitting
                        ? "در حال ثبت اطلاعات…"
                        : "ثبت اطلاعات بازدیدکننده"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Checklist Image*/}
        <div className="w-full lg:w-1/2 relative">
          <Image
            src={Banner.src}
            alt="شخصیت‌های به‌لند در کنار فرم ثبت اطلاعات بازدیدکنندگان"
            width={579}
            height={783.66}
            className="w-full max-h-[70vh] object-contain opacity-100"
            priority
            quality={60}
          />
        </div>
      </div>
    </main>
  );
}
