// /interfaces/CaseStudiesInterface.ts
interface CaseStudyProps {
  caseStudy: {
    name: string;
    title: string;
    href: string;
    image: string;
    url: string;
    description: string;
    details: string;
    highlights?: string[];
    skills?: { name: string; icon: string }[];
  };
}

export interface CaseStudyProps {
  caseStudy: CaseStudiesInterface;
}
