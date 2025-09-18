import Image from "next/image";

export function EventDetails() {
  return (
    <div className="mt-8 space-y-4" style={{ width: 600 }}>
      {/* Date and Time section */}
      <div className="flex items-center justify-between bg-white/60 rounded-lg p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Image src="/Img/Clock.png" alt="Clock" width={24} height={24} />
            <span style={{ 
              fontFamily: "var(--font-vazirmatn)", 
              fontSize: 16, 
              fontWeight: 600, 
              color: "#4D4D4D" 
            }}>
              ساعت ۶ عصر
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/Img/Calendar.png" alt="Calendar" width={24} height={24} />
          <span style={{ 
            fontFamily: "var(--font-vazirmatn)", 
            fontSize: 16, 
            fontWeight: 600, 
            color: "#4D4D4D" 
          }}>
            جمعه ۴ مهرماه ۱۴۰۳ (۲۶ سپتامبر ۲۰۲۴)
          </span>
        </div>
      </div>

      {/* Telegram channel section */}
      <div className="flex items-center justify-between bg-white/60 rounded-lg p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <Image src="/Img/Chat.png" alt="Telegram" width={24} height={24} />
          <span style={{ 
            fontFamily: "var(--font-vazirmatn)", 
            fontSize: 16, 
            fontWeight: 600, 
            color: "#4D4D4D" 
          }}>
            کانال رسمی بهلند:
          </span>
        </div>
        <a 
          href="https://t.me/BehLand_Official"
          className="text-blue-600 hover:text-blue-800"
          style={{ 
            fontFamily: "var(--font-vazirmatn)", 
            fontSize: 16, 
            fontWeight: 500 
          }}
        >
          https://t.me/BehLand_Official
        </a>
      </div>

      {/* Website section */}
      <div className="flex items-center justify-between bg-white/60 rounded-lg p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <Image src="/Img/Browser.png" alt="Website" width={24} height={24} />
          <span style={{ 
            fontFamily: "var(--font-vazirmatn)", 
            fontSize: 16, 
            fontWeight: 600, 
            color: "#4D4D4D" 
          }}>
            وب‌سایت بهلند:
          </span>
        </div>
        <a 
          href="https://beh.land"
          className="text-blue-600 hover:text-blue-800"
          style={{ 
            fontFamily: "var(--font-vazirmatn)", 
            fontSize: 16, 
            fontWeight: 500 
          }}
        >
          https://beh.land
        </a>
      </div>

      {/* Registration button */}
      <div className="bg-white/60 rounded-lg p-4 shadow-sm">
        <button 
          className="w-full py-3 rounded-lg border-2 border-[#CC6D14] text-[#CC6D14] hover:bg-[#CC6D14] hover:text-white transition-colors"
          style={{ 
            fontFamily: "var(--font-vazirmatn)", 
            fontSize: 18, 
            fontWeight: 600 
          }}
        >
          ثبت نام در رویداد
        </button>
      </div>
    </div>
  );
}
