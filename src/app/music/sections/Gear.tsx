"use client";
import SectionHeader from "@/components/SectionHeading";

export default function Gear() {
  return (
    <section aria-labelledby="gear-heading" role="contentinfo">
      <SectionHeader id="gear" name="Gear" />
      <ul>
        <li>Proficient in React, Next.js, Node.js, and TypeScript</li>
        <li>Experienced with GSAP and TailwindCSS</li>
        <li>Strong knowledge of accessibility standards and best practices</li>
      </ul>
    </section>
  );
}
