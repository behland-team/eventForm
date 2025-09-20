"use client";

import { useRouter } from "next/navigation";

interface CTAButtonProps {
  width?: number;
  height?: number;
  text: string;
  className?: string;
}

export default function CTAButton({ width, height, text, className = "" }: CTAButtonProps) {
  const router = useRouter();
  
  // Convert width to Tailwind classes
  const getWidthClass = (w?: number) => {
    if (!w) return '';
    if (w === 696) return 'w-[43.5rem]';
    if (w === 600) return 'w-[37.5rem]';
    return `w-[${w}px]`;
  };

  const getHeightClass = (h?: number) => {
    if (!h) return '';
    if (h === 56) return 'h-14';
    return `h-[${h}px]`;
  };
  
  const baseClasses = "rounded-lg border-2 border-[#BD5300] bg-[#FFF9F3] shadow-[0px_4px_0px_0px_#CC6D14] px-4 lg:px-6 py-2 gap-2 font-lalezar font-semibold text-base leading-none text-[#BD5300] cursor-pointer flex items-center justify-center transition-all duration-200 ease-in-out hover:translate-y-0.5 hover:shadow-[0px_2px_0px_0px_#CC6D14] active:translate-y-1 active:shadow-none";
  
  return (
    <button
      className={`${baseClasses} ${getWidthClass(width)} ${getHeightClass(height)} ${className}`}
      onClick={() => {
        // Check if mobile
        const isMobile = window.innerWidth <= 768;
        router.push(isMobile ? "/form/mobile" : "/form");
      }}
    >
      {text}
    </button>
  );
}


