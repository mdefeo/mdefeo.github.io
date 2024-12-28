"use client";

export default function Hello() {
  return (
    <section
      aria-labelledby="hello-heading"
      role="contentinfo"
      className="p-8"
    >
      <h2 id="hello-heading" className="text-4xl font-bold">
        Hello
      </h2>
      <ul className="list-disc pl-6">
        <li>Proficient in React, Next.js, Node.js, and TypeScript</li>
        <li>Experienced with GSAP and TailwindCSS</li>
        <li>Strong knowledge of accessibility standards and best practices</li>
      </ul>
    </section>
  );
}
