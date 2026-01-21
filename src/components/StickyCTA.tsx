"use client";

import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Show after scrolling past hero
    const handleScroll = () => {
      const scrolled = window.scrollY > 600;
      setIsVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Only show on mobile
  if (!isVisible || !isMobile) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/98 backdrop-blur-md border-t border-white/10 px-4 py-3 safe-area-bottom">
      <a
        href="tel:+14158123257"
        className="flex items-center justify-center gap-3 bg-[#b8860b] text-[#0a0a0a] py-3.5 font-semibold text-sm uppercase tracking-[0.1em] w-full hover:bg-[#d4a017] transition-colors"
      >
        <Phone className="h-4 w-4" />
        Call Now: (415) 812-3257
      </a>
    </div>
  );
}
