// /src/components/HeroSection.tsx
"use client";

import { HeroSectionProps } from "@/types/HeroSectionProps";
import { useState, useEffect } from "react";

export default function HeroSection({ id, heading, children }: HeroSectionProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section
        id={id}
        className="hero-section min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100"
      > 
        <div className="animate-pulse">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#333" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      </section>
    );
  }
  return (
    <section
      id={id}
      aria-labelledby={heading ? `${id}-heading` : undefined}
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100"
      role="region"
    >
      {heading && (
        <h2 id={`${id}-heading`} className="text-4xl font-bold mb-4">
          {heading}
        </h2>
      )}
      <div className="w-full h-screen">{children}</div>
    </section>
  );
}
