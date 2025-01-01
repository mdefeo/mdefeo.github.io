// /interfaces/CaseStudiesInterface.ts
export interface CaseStudiesInterface {
  name: string;
  description: string;
  image: string;
  details: string;
}

export interface CaseStudyProps {
  caseStudy: CaseStudiesInterface;
}