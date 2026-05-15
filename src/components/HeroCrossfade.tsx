"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  imageA: string;
  imageB: string;
};

export default function HeroCrossfade({ imageA, imageB }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const playState = inView ? "running" : "paused";

  return (
    <div ref={ref} aria-hidden className="absolute inset-0 pointer-events-none">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-[fadeInOut_15s_ease-in-out_infinite]"
        style={{
          backgroundImage: `url('${imageA}')`,
          animationPlayState: playState,
        }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-[fadeInOut_15s_ease-in-out_7.5s_infinite]"
        style={{
          backgroundImage: `url('${imageB}')`,
          animationPlayState: playState,
        }}
      />
    </div>
  );
}
