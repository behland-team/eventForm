"use client";

import { useRouter } from "next/navigation";

interface CTAButtonProps {
  width: number;
  height: number;
  fontFamily: string;
  fontWeight: number;
  fontSize: number;
  text: string;
}

export default function CTAButton({ width, height, fontFamily, fontWeight, fontSize, text }: CTAButtonProps) {
  const router = useRouter();
  return (
    <button
      style={{
        width,
        height,
        borderRadius: 8,
        border: "2px solid #BD5300",
        background: "#FFF9F3",
        boxShadow: "0px 4px 0px 0px #CC6D14",
        padding: "8px 24px",
        gap: 8,
        fontFamily,
        fontWeight,
        fontSize,
        lineHeight: "100%",
        letterSpacing: "0%",
        textAlign: "justify" as const,
        color: "#BD5300",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(2px)";
        e.currentTarget.style.boxShadow = "0px 2px 0px 0px #CC6D14";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.boxShadow = "0px 4px 0px 0px #CC6D14";
      }}
      onClick={() => router.push("/form")}
    >
      {text}
    </button>
  );
}


