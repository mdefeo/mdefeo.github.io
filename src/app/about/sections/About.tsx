"use client";

export default function About() {
  return (
    <section
      aria-labelledby="about-heading"
      role="contentinfo"
      className="p-8"
    >
      <h2 id="about-heading" className="text-4xl font-bold">
        About
      </h2>
      <ul className="list-disc pl-6">
        <li>Proficient in React, Next.js, Node.js, and TypeScript</li>
        <li>Experienced with GSAP and TailwindCSS</li>
        <li>Strong knowledge of accessibility standards and best practices</li>
      </ul>
    </section>
  );
}
