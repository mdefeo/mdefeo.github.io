"use client";
import SectionHeader from "@/components/ui/SectionHeading";

export default function Projects() {
  return (
    <section
      aria-labelledby="design-heading"
      role="contentinfo"
      className="design-section flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-screen gap-4"
    >
      <SectionHeader id="projects" name="Projects" />
      <h4 id="prl" >Current Projects</h4>
      <ul>
        <li>Real Estate Listing Aggregator</li>
        <li>Real-time NHL Analytics Dashboard</li>
        <li>Strong knowledge of accessibility standards and best practices</li>
      </ul>
    </section>
  );
}
