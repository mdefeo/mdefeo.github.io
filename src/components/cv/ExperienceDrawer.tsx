import { ExperienceListItemProps, ExperiencesDrawerProps } from "@/interfaces/ExperienceListInterface";
import Image from "next/image";

const ExperienceDrawer: React.FC<ExperiencesDrawerProps> = ({ experiences, onExperienceSelect }) => {
  const handleExperienceSelect = (experience: ExperienceListItemProps) => {
    onExperienceSelect(experience);
  };

  return (
    <div className="inset-x-0 flex justify-center items-center px-4">
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="cursor-pointer px-3 flex flex-col items-center"
          onClick={() => handleExperienceSelect(experience)}
        >
          <Image
            src={experience.logoSrc}
            alt={`${experience.title} at ${experience.institutionName}`}
            width={40}
            height={40}
            className="object-contain rounded-full"
          />
        </div>
      ))}
    </div>
  );
};

export default ExperienceDrawer;
