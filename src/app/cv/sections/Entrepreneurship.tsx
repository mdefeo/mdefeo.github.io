"use client";
import Image from "next/image";
import entrepreneurshipData from '@/config/data/experience/entrepreneurshipData.json'; // Import the JSON data
import ExperienceListItem from '@/components/ui/ExperienceListItem'; // Ensure to import the component

export default function Entrepreneurship() {
  return (
    <section id="entrepreneurship" aria-labelledby="entrepreneurship-heading" role="contentinfo">
      <article>
        {entrepreneurshipData.map((item, index) => (
          <ExperienceListItem
            key={index}
            logoSrc={item.logoSrc}
            altText={item.altText}
            businessName={item.businessName}
            duration={item.duration}
            position={item.position}
            location={item.location}
            responsibilities={item.responsibilities}
          />
        ))}
      </article>
    </section>
  );
}
