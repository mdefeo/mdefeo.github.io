"use client";
import SectionHeader from "@/components/ui/SectionHeading";

export default function Clients() {
  return (
    <section
      aria-labelledby="clients-heading"
      role="contentinfo"
      className="clients-section flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-screen gap-4"
    >
      <SectionHeader id="clients" name="Clients" />
      <ul>
        <li>Proficient in React, Next.js, Node.js, and TypeScript</li>
        <li>Experienced with GSAP and TailwindCSS</li>
        <li>Strong knowledge of accessibility standards and best practices</li>
      </ul>
    </section>
  );
}
