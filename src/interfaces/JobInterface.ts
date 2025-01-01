// /interfaces/JobInterface.ts
export interface Technology {
  name: string;
  icon: string;
}

export interface Job {
  id: number;
  company: string;
  title: string;
  location: string;
  years: string;
  description: string[];
  logo: string;
  technologies: Technology[];
}

export interface SelectedJobProps {
  job: Job;
}

export interface JobListProps {
  jobs: Job[];
  onJobSelect: (job: Job) => void;
}