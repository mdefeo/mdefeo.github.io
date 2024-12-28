"use client";

export default function Awards() {
  return (
    <section
      aria-labelledby="awards-heading"
      role="contentinfo"
      className="p-8"
    >
      <h2 id="awards-heading" className="text-4xl font-bold">
        Awards
      </h2>
      <ul className="list-disc pl-6">
        <li>Proficient in React, Next.js, Node.js, and TypeScript</li>
        <li>Experienced with GSAP and TailwindCSS</li>
        <li>Strong knowledge of accessibility standards and best practices</li>
      </ul>
    </section>
  );
}
