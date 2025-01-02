"use client";
import SectionHeader from "@/components/ui/SectionHeading";

export default function Bands() {
  return (
    <section aria-labelledby="bands-heading" role="contentinfo">
      <SectionHeader id="bands" name="Bands" />
      <ul>
        <li>Proficient in React, Next.js, Node.js, and TypeScript</li>
        <li>Experienced with GSAP and TailwindCSS</li>
        <li>Strong knowledge of accessibility standards and best practices</li>
      </ul>
    </section>
  );
}
