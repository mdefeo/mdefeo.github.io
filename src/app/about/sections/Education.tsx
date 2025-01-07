"use client";
import Image from "next/image";
import ExperienceListItem from '@/components/ui/ExperienceListItem'; // Ensure to import the component
import educationData from '@/config/data/experience/educationData.json';

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" role="contentinfo">
      <article>
        {educationData.map((item, index) => (
          <ExperienceListItem
            key={index}
            logoSrc={item.logoSrc}
            altText={item.altText}
            businessName={item.institutionName}
            duration={item.duration}
            position={item.degree}
            location={item.location}
            responsibilities={item.description}
          />
        ))}
      </article>
    </section>
  );
}
