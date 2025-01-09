"use client";
import ExperienceListItem from '@/components/ui/ExperienceListItem';
import educationData from '@/config/data/experience/educationData.json';

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" role="contentinfo">
      <article>
        {educationData.map((item, index) => (
          <ExperienceListItem
            id={index}
            key={index}
            logoSrc={item.logoSrc}
            altText={item.altText}
            institutionName={item.institutionName}
            duration={item.duration}
            title={item.degree}
            location={item.location}
            description={item.description}
          />
        ))}
      </article>
    </section>
  );
}
