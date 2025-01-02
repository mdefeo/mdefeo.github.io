// /interfaces/CaseStudiesInterface.ts

export interface Skill {
  name: string; // Change this to string to allow any skill name
  icon: string;
  alt: string;
}

export interface CaseStudiesInterface {
  name: string;
  title: string;
  href: string;
  image: string;
  url: string;
  description: string;
  challenges: string[];
  outcomes: string[];
  skills: Skill[]; // Updated to handle custom skills structure
  clientLogo: string;
  role: string;
  team: string[];
  duration: string;
}

export interface CaseStudyProps {
  caseStudy: CaseStudiesInterface;
}
