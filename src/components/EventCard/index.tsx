import Image from "next/image";
import { EventDetails } from "./EventDetails";
import { EventInfo } from "./EventInfo";

interface EventCardProps {
  title: string;
  description: string;
}

export function EventCard({ title, description }: EventCardProps) {
  return (
    <div className="mx-auto relative" style={{ width: 696 }}>
      {/* Hourglass image */}
      <div
        style={{
          position: "absolute",
          width: 118.69,
          height: 175.66,
          top: -60,
          left: -60,
          zIndex: 10,
          transform: "rotate(-28.58deg) scaleX(-1)",
          opacity: 1,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Image
          src="/Img/hourglass.png"
          alt="Hourglass"
          width={119}
          height={176}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>
      
      <section
        className="rounded-2xl shadow-[0_0_7px_0_#00000040]"
        style={{ background: "#FEECD8", height: 799 }}
      >
        <div className="p-6 sm:p-8">
          {/* Title */}
          <div
            className="flex items-center justify-between"
            style={{ width: "100%", height: 75 }}
          >
            <h1
              className="font-lalezar text-[48px] leading-[100%] text-[#CC6D14] text-right w-full whitespace-nowrap"
              style={{ fontFamily: "var(--font-lalezar)" }}
            >
              {title}
            </h1>
          </div>

          {/* Description */}
          <div className="mt-6" style={{ width: 599 }}>
            <p
              className="text-[#292929] text-justify"
              style={{ 
                fontFamily: "var(--font-vazirmatn)", 
                fontSize: 24, 
                lineHeight: "45px", 
                fontWeight: 500 
              }}
            >
              {description}
            </p>
          </div>

          <hr
            className="mt-6 border-dashed"
            style={{ 
              width: 600, 
              borderColor: "#4D4D4D61", 
              borderWidth: 1, 
              borderStyle: "dashed" as const 
            }}
          />

          <EventInfo />
          <EventDetails />
        </div>
      </section>
    </div>
  );
}
