"use client";
import SectionHeader from "@/components/SectionHeading";

export default function About() {
  return (
    <section aria-labelledby="about-heading" role="contentinfo">
      <SectionHeader id="about" name="About" />
      <ul>
        <li>Proficient in React, Next.js, Node.js, and TypeScript</li>
        <li>Experienced with GSAP and TailwindCSS</li>
        <li>Strong knowledge of accessibility standards and best practices</li>
      </ul>
    </section>
  );
}
