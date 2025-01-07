import Image from 'next/image';
import { ExperienceListItemProps } from '@/interfaces/ExperienceListInterface';

const ExperienceListItem: React.FC<ExperienceListItemProps> = ({
  logoSrc,
  altText,
  businessName,
  duration,
  position,
  location,
  responsibilities,
}) => {
  // Helper function to render responsibilities correctly
  const renderResponsibilities = (responsibilities: string | string[]) => {
    if (typeof responsibilities === 'string') {
      return <p className="text-sm text-secondary-content">{responsibilities}</p>;
    } else if (Array.isArray(responsibilities)) {
      return (
        <ul className="text-sm m-0 pl-3 text-secondary-content">
          {responsibilities.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col sm:flex-row sm:space-x-8 mb-4">
      <div className="mr-4 flex-shrink-0 md:block hidden">
        <Image
          src={logoSrc}
          alt={altText}
          width={80}
          height={80}
          className="object-contain rounded-full"
        />
      </div>
      <div className="flex-1 mb-4">
        <div className="flex justify-between items-top">
          <h3 className="mb-0">{businessName}</h3>
          <p className="text-right text-md md:block hidden text-base-300">{duration}</p>
        </div>
        <div className="flex justify-between items-top">
          <p className="text-md mb-2 text-base-300">{position}</p>
          <p className="text-right text-sm text-base-300 md:block hidden">{location}</p>
        </div>
        {renderResponsibilities(responsibilities)}
      </div>
    </div>
  );
};

export default ExperienceListItem;
