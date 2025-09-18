import Image from "next/image";

interface InfoBoxProps {
  text: string;
  iconSrc: string;
  iconAlt: string;
  width?: number;
  height?: number;
  textWidth?: number;
  textHeight?: number;
}

export default function InfoBox({
  text,
  iconSrc,
  iconAlt,
  width = 396,
  height = 80,
  textWidth = 293,
  textHeight = 28
}: InfoBoxProps) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: 8,
        background: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 20px",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        marginBottom: 16
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={48}
          height={48}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div
        style={{
          width: textWidth,
          height: textHeight,
          fontFamily: "var(--font-vazirmatn)",
          fontWeight: 600,
          fontSize: 18,
          lineHeight: "100%",
          letterSpacing: "0%",
          textAlign: "right",
          color: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end"
        }}
      >
        {text}
      </div>
    </div>
  );
}
