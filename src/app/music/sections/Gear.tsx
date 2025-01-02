"use client";
import SectionHeader from "@/components/ui/SectionHeading";

export default function Gear() {
  return (
    <section
      aria-labelledby="gear-heading"
      role="contentinfo"
      className="gear-section flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-screen gap-4"
    >
      <SectionHeader id="gear" name="Gear" />
      <ul>
        <li>Proficient in React, Next.js, Node.js, and TypeScript</li>
        <li>Experienced with GSAP and TailwindCSS</li>
        <li>Strong knowledge of accessibility standards and best practices</li>
      </ul>
    </section>
  );
}
