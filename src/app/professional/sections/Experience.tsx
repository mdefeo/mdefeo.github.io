import { Tab } from '@headlessui/react';
import { ExperienceListItemProps } from "@/interfaces/ExperienceListInterface";
import ExperienceListItem from "@/components/ui/ExperienceListItem";
import professionalData from "@/config/data/experience/professionalData.json";
import Image from "next/image";

const Experience: React.FC<{ onExperienceSelect: (experience: ExperienceListItemProps) => void }> = ({ onExperienceSelect }) => {

  return (
    <section
      aria-labelledby="experience-heading"
      id="experience"
      role="contentinfo"
      className="experiemce-section flex flex-col justify-center h-auto md:h-screen gap-4"
    >
      <div className="flex flex-wrap justify-center gap-4">
        <Tab.Group>
          <Tab.List className="tabs mb-6">
            {professionalData.map((experience) => (
              <Tab
                key={experience.id}
                className={`tab ${experience.id === experience.id ? "tab-active focus-visible:outline-none outline-none" : ""}`}
              >
                <Image
                  src={experience.logoSrc}
                  alt={experience.title}
                  width={40}
                  height={40}
                  className="object-contain rounded-full"
                />
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-4">
            {professionalData.map((experience) => (
              <Tab.Panel key={experience.id}>
                <div className="selected-job-container">
                  <ExperienceListItem
                    id={experience.id}
                    logoSrc={experience.logoSrc}
                    altText={experience.title}
                    institutionName={experience.institutionName}
                    duration={experience.duration}
                    title={experience.title}
                    location={experience.location}
                    description={experience.description}
                  />
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default Experience;
