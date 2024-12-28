"use client";

import { HeroSectionProps } from "@/types/HeroSectionProps";

export default function HeroSection({ id, heading, children }: HeroSectionProps) {
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
      <div className="w-full">{children}</div>
    </section>
  );
}
