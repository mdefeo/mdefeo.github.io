"use client";
import Image from "next/image";
import ExperienceListItem from '@/components/ui/ExperienceListItem'; // Ensure to import the component
import educationData from '@/config/data/experience/professionalData.json';

export default function Experience() {
  return (
    <section id="education" aria-labelledby="education-heading" role="contentinfo">
      <article>
        {educationData.map((item, index) => (
          <ExperienceListItem
            key={index}
            logoSrc={item.logoSrc}
            altText={item.title}
            businessName={item.institutionName}
            duration={item.duration}
            position={item.title}
            location={item.location}
            responsibilities={item.description}
          />
        ))}
      </article>
    </section>
  );
}

