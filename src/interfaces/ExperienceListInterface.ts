export interface Technology {
  name: string;
  icon: string;
}

export interface ExperienceListProps {
  experiences: ExperienceListItemProps[];
  selectedExperience: ExperienceListItemProps;
  onExperienceSelect: (experience: ExperienceListItemProps) => void;
}

export interface ExperiencesDrawerProps {
  experiences: ExperienceListItemProps[];
  onExperienceSelect: (experience: ExperienceListItemProps) => void;
}

export interface ExperienceListItemProps {
  id: number;
  logoSrc: string;
  altText: string;
  institutionName: string; 
  duration: string; 
  title: string;
  location: string; 
  description: string | string[]; 
  technologies?: Technology[]; 
  institutionNameShortName?: string; 
  titleShortName?: string; 
  onClick?: () => void; 
  selected?: boolean;
}

