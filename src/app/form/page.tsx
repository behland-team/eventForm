"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
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
    <main style={{ minHeight: "100vh", background: "#FFF6EC", padding: "0", margin: "0" }}>
      <div style={{ 
        display: "flex", 
        height: "100vh",
        padding: "0",
        margin: "0",
        gap: "0"
      }}>
        {/* Left Side - Form Container */}
        <div style={{ 
          flex: 1,
          display: "flex", 
          alignItems: "center", 
          justifyContent: "flex-end", 
          position: "relative",
          background: "#FFF6EC",
          border: "4px solid #FFFFFF3D",
          paddingRight: "50px"
        }}>
          <div
            style={{
              width: 673,
              height: 798,
              borderRadius: 16,
              background: "#FEECD8",
              boxShadow: "0px 0px 7px 0px #00000040",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              position: "relative"
            }}
          >
          {/* Title */}
          <h1
            style={{
              width: 346,
              height: 75,
              fontFamily: "var(--font-lalezar)",
              fontWeight: 400,
              fontSize: 48,
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "left",
              color: "#CC6D14",
              margin: 0,
              marginBottom: "24px",
              alignSelf: "flex-start"
            }}
          >
            فرم ثبت نام در رویداد
          </h1>

          {/* Description */}
          <p
            style={{
              width: 599,
              height: 96,
              fontFamily: "var(--font-vazirmatn)",
              fontWeight: 500,
              fontSize: 16,
              lineHeight: "32px",
              letterSpacing: "0%",
              textAlign: "justify",
              color: "#292929",
              margin: 0,
              marginBottom: "32px"
            }}
          >
            این رویداد فرصتی ارزشمند برای یادگیری و تبادل تجربه است.
            با تکمیل فرم زیر، هم حضور خود را ثبت می‌کنید و هم می‌توانید سوالاتی که دوست دارید مطرح شوند را با ما در میان بگذارید. منتظر همراهی گرم شما هستیم.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
              {/* Full Name */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", position: "relative" }}>
                <input
                  id="fullName"
                  type="text"
                  {...register("fullName")}
                  style={{
                    width: 295,
                    height: 48,
                    padding: "13px 24px",
                    borderRadius: "8px",
                    border: "1px solid #989898",
                    background: "#FFF9F3",
                    fontFamily: "var(--font-yekan-bakh)",
                    fontSize: "14px",
                    textAlign: "right",
                    direction: "rtl",
                    color: "#292929"
                  }}
                  placeholder="نام و نام خانوادگی"
                />
                <div style={{ 
                  position: "absolute", 
                  right: "12px", 
                  top: "50%", 
                  transform: "translateY(-50%)",
                  color: "#B93E2E",
                  fontSize: "14px",
                  fontFamily: "var(--font-yekan-bakh)",
                  fontWeight: 600
                }}>
                  *
                </div>
                {errors.fullName && (
                  <p style={{ 
                    color: "#EF4444", 
                    fontSize: "14px", 
                    marginTop: "4px",
                    fontFamily: "var(--font-yekan-bakh)"
                  }}>
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", position: "relative" }}>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  style={{
                    width: 295,
                    height: 48,
                    padding: "13px 24px",
                    borderRadius: "8px",
                    border: "1px solid #989898",
                    background: "#FFF9F3",
                    fontFamily: "var(--font-yekan-bakh)",
                    fontSize: "14px",
                    textAlign: "right",
                    direction: "rtl",
                    color: "#292929"
                  }}
                  placeholder="آدرس ایمیل"
                />
                <div style={{ 
                  position: "absolute", 
                  right: "12px", 
                  top: "50%", 
                  transform: "translateY(-50%)",
                  color: "#B93E2E",
                  fontSize: "14px",
                  fontFamily: "var(--font-yekan-bakh)",
                  fontWeight: 600
                }}>
                  *
                </div>
                {errors.email && (
                  <p style={{ 
                    color: "#EF4444", 
                    fontSize: "14px", 
                    marginTop: "4px",
                    fontFamily: "var(--font-yekan-bakh)"
                  }}>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                <input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  style={{
                    width: 295,
                    height: 48,
                    padding: "13px 24px",
                    borderRadius: "8px",
                    border: "1px solid #989898",
                    background: "#FFF9F3",
                    fontFamily: "var(--font-yekan-bakh)",
                    fontSize: "14px",
                    textAlign: "right",
                    direction: "rtl",
                    color: "#292929"
                  }}
                  placeholder="شماره تلفن"
                />
              </div>

              {/* Telegram ID */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                <input
                  id="telegramId"
                  type="text"
                  {...register("telegramId")}
                  style={{
                    width: 295,
                    height: 48,
                    padding: "13px 24px",
                    borderRadius: "8px",
                    border: "1px solid #989898",
                    background: "#FFF9F3",
                    fontFamily: "var(--font-yekan-bakh)",
                    fontSize: "14px",
                    textAlign: "right",
                    direction: "rtl",
                    color: "#292929"
                  }}
                  placeholder="آی دی تلگرام"
                />
              </div>
            </div>

            {/* Questions Section */}
            <div style={{ marginBottom: "32px" }}>
              <p
                style={{
                  width: 350,
                  height: 25,
                  fontFamily: "var(--font-yekan-bakh)",
                  fontWeight: 600,
                  fontSize: 16,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "justify",
                  color: "#292929",
                  marginBottom: "16px"
                }}
              >
                سوالاتتون رو میتونین از طریق باکس زیر مطرح کنید.
              </p>
              
              <div
                style={{
                  width: 609,
                  height: 207,
                  borderRadius: 8,
                  background: "#FFF9F3",
                  border: "1px solid #989898",
                  padding: "16px 24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 8
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-yekan-bakh)",
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    textAlign: "justify",
                    color: "#999999",
                    marginBottom: "8px"
                  }}
                >
                  سوالات شما
                </span>
                <textarea
                  id="question"
                  rows={5}
                  {...register("question")}
                  style={{
                    width: "100%",
                    height: "120px",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid #D1D5DB",
                    fontFamily: "var(--font-yekan-bakh)",
                    fontSize: "14px",
                    textAlign: "right",
                    direction: "rtl",
                    resize: "vertical",
                    background: "transparent",
                    color: "#292929"
                  }}
                  placeholder="سوالات خود را اینجا بنویسید..."
                />
                {errors.question && (
                  <p style={{ 
                    color: "#EF4444", 
                    fontSize: "14px", 
                    marginTop: "4px",
                    fontFamily: "var(--font-yekan-bakh)"
                  }}>
                    {errors.question.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: 152,
                  height: 48,
                  borderRadius: 8,
                  background: "#FFF9F3",
                  border: "2px solid #BD5300",
                  boxShadow: "0px 4px 0px 0px #CC6D14",
                  padding: "8px 24px",
                  fontFamily: "var(--font-yekan-bakh)",
                  fontWeight: 600,
                  fontSize: 16,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "justify",
                  color: "#BD5300",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  opacity: isSubmitting ? 0.7 : 1,
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = "translateY(2px)";
                    e.currentTarget.style.boxShadow = "0px 2px 0px 0px #CC6D14";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = "translateY(0px)";
                    e.currentTarget.style.boxShadow = "0px 4px 0px 0px #CC6D14";
                  }
                }}
              >
                {isSubmitting ? "در حال ثبت..." : "ثبت اطلاعات"}
              </button>
            </div>

          </form>
          </div>
        </div>

        {/* Right Side - Checklist Image */}
        <div style={{ 
          flex: 1, 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "flex-start",
          background: "#FFF6EC",
          position: "relative",
          border: "4px solid #FFFFFF3D",
          paddingLeft: "50px"
        }}>
          <div style={{
            position: "relative",
            width: "579px",
            height: "783.66px",
            marginLeft: "-100px",
            zIndex: 2
          }}>
            <Image 
              src="/Img/Checklist.png" 
              alt="Checklist Illustration" 
              width={579} 
              height={784} 
              style={{ 
                width: "579px", 
                height: "783.66px"
              }} 
              priority 
            />
          </div>
        </div>
      </div>
    </main>
  );
}
