"use client";
import SectionHeader from "@/components/ui/SectionHeading";

export default function Clients() {
  return (
    <section aria-labelledby="clients-heading" role="contentinfo">
      <SectionHeader id="clients" name="Clients" />
      <ul>
        <li>Proficient in React, Next.js, Node.js, and TypeScript</li>
        <li>Experienced with GSAP and TailwindCSS</li>
        <li>Strong knowledge of accessibility standards and best practices</li>
      </ul>
    </section>
  );
}
