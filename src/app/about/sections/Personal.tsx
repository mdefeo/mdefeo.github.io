"use client";
import SectionHeader from "@/components/SectionHeading";

export default function Personal() {
  return (
    <section aria-labelledby="professional-heading" role="contentinfo">
      <SectionHeader id="personal" name="Personal" />
      <ul>
        <li>Proficient in React, Next.js, Node.js, and TypeScript</li>
        <li>Experienced with GSAP and TailwindCSS</li>
        <li>Strong knowledge of accessibility standards and best practices</li>
      </ul>
    </section>
  );
}
