"use client";
import ExperienceListItem from '@/components/ui/ExperienceListItem';
import educationData from '@/config/data/experience/educationData.json';

export default function Education() {
  return (
    <section className="relative" id="education" aria-labelledby="education-heading" role="contentinfo">
      <h2 className="align-middle rotate-180 [writing-mode:vertical-rl] [text-orientation:mixed] text-5xl left-0 top-10 absolute">Education</h2>

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
