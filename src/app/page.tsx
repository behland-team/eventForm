"use client";

import { useEffect, useState } from "react";
import MobileView from "@/components/MobileView";
import DesktopView from "@/components/DesktopView";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#FFF6EC]">
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
}
