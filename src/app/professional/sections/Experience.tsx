import { useState, useEffect } from 'react';
import { ExperienceListItemProps } from "@/interfaces/ExperienceListInterface";
import ExperienceListItem from "@/components/ui/ExperienceListItem";
import ExperienceDrawer from "@/components/cv/ExperienceDrawer"; 
import professionalData from "@/config/data/experience/professionalData.json";

const Experience: React.FC<{ onExperienceSelect: (experience: ExperienceListItemProps) => void }> = ({ onExperienceSelect }) => {
  const [experiences, setExperiences] = useState<ExperienceListItemProps[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceListItemProps | null>(null);

  useEffect(() => {
    setExperiences(professionalData);
  }, []);

  useEffect(() => {
    if (!selectedExperience && experiences.length > 0) {
      setSelectedExperience(experiences[0]);
      onExperienceSelect(experiences[0]);
    }
  }, [experiences, onExperienceSelect, selectedExperience]);

  const handleExperienceSelect = (experience: ExperienceListItemProps) => {
    setSelectedExperience(experience);
    onExperienceSelect(experience);
  };

  return (
    <section id="experience" aria-labelledby="experience-heading">
      <div className="flex flex-wrap justify-start gap-4">
        {selectedExperience && (
          <div className="selected-job-container">
            <ExperienceListItem
              id={selectedExperience.id}
              key={selectedExperience.id}
              logoSrc={selectedExperience.logoSrc}
              altText={selectedExperience.title}
              institutionName={selectedExperience.institutionName}
              duration={selectedExperience.duration}
              title={selectedExperience.title}
              location={selectedExperience.location}
              description={selectedExperience.description}
              onClick={() => handleExperienceSelect(selectedExperience)}
              selected={true}
            />
          </div>
        )}
      </div>
      <ExperienceDrawer 
        experiences={experiences} 
        onExperienceSelect={handleExperienceSelect} 
      />
    </section>
  );
};

export default Experience;
