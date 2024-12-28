"use client";

export default function Favorites() {
  return (
    <section
      aria-labelledby="favorites-heading"
      role="contentinfo"
      className="p-8"
    >
      <h2 id="favorites-heading" className="text-4xl font-bold">
        Favorites
      </h2>
      <ul className="list-disc pl-6">
        <li>Proficient in React, Next.js, Node.js, and TypeScript</li>
        <li>Experienced with GSAP and TailwindCSS</li>
        <li>Strong knowledge of accessibility standards and best practices</li>
      </ul>
    </section>
  );
}
