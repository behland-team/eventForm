import Image from "next/image";

interface InfoBoxProps {
  text: string;
  iconSrc: string;
  iconAlt: string;
  width?: number;
  height?: number;
  link?: string;
}

export default function InfoBox({
  text,
  iconSrc,
  iconAlt,
  width = 396,
  height = 80,
  link
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
      {/* Right side - Icon and Text */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          flex: link ? 0 : 1,
          justifyContent: "flex-end"
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
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
        <span
          style={{
            fontFamily: "var(--font-vazirmatn)",
            fontWeight: 600,
            fontSize: 18,
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#000000",
            whiteSpace: "nowrap"
          }}
        >
          {text}
        </span>
      </div>
      
      {/* Left side - Link */}
      {link && (
        <div style={{ flex: 1, textAlign: "left" }}>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: "#007bff", 
              textDecoration: "none",
              fontFamily: "var(--font-vazirmatn)",
              fontWeight: 600,
              fontSize: 18,
              lineHeight: "100%"
            }}
          >
            {link}
          </a>
        </div>
      )}
    </div>
  );
}
