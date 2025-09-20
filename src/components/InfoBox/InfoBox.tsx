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
  // Convert width to Tailwind classes
  const getWidthClass = (w: number) => {
    if (w === 696) return 'w-[43.5rem]';
    if (w === 600) return 'w-[37.5rem]';
    if (w === 396) return 'w-[24.75rem]';
    if (w === 188) return 'w-[11.75rem]';
    return `w-[${w}px]`;
  };

  const getHeightClass = (h: number) => {
    if (h === 80) return 'h-20';
    return `h-[${h}px]`;
  };

  return (
    <div
      className={`rounded-lg bg-white flex items-center justify-between p-4 lg:px-5 shadow-lg ${getWidthClass(width)} ${getHeightClass(height)}`}
    >
      {/* Right side - Icon and Text */}
      <div className={`flex items-center gap-3 ${link ? 'flex-none' : 'flex-1'} justify-end`}>
        <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={48}
            height={48}
            className="w-full h-auto"
          />
        </div>
        <span className="font-lalezar font-semibold text-lg leading-none text-black whitespace-nowrap">
          {text}
        </span>
      </div>
      
      {/* Left side - Link */}
      {link && (
        <div className="flex-1 text-left">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 no-underline font-lalezar font-semibold text-lg leading-none hover:text-blue-800 transition-colors"
          >
            {link}
          </a>
        </div>
      )}
    </div>
  );
}
