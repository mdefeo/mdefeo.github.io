import { IconProp } from "@fortawesome/fontawesome-svg-core";
import icons from "../icons";

export interface Technology {
  name: string;
  icon: keyof typeof icons | IconProp;
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
  listCompany: string;
  listTitle: string;
}

export interface SelectedJobProps {
  job: Job;
}

export interface JobListProps {
  jobs: Job[];
  selectedJob: Job;
  onJobSelect: (job: Job) => void;
}

export interface JobsDrawerProps {
  jobs: Job[];
  onJobSelect: (job: Job) => void;
}