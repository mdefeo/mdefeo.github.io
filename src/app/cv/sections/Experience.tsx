"use client";
import { useState, useEffect } from "react";
import jobs from "@/data/json/jobs.json";
import { Job } from "@/interfaces/JobInterface";
import SelectedJob from "@/components/cv/SelectedJob";
import JobsDrawer from "@/components/cv/JobsDrawer";
import SectionHeader from "@/components/ui/SectionHeading";

const Experience: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job>(jobs[0]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const job = jobs.find(job => job.company.toLowerCase().replace(/\s+/g, '-') === hash);
    if (job) {
      setSelectedJob(job);
    } else {
      window.location.hash = jobs[0].company.toLowerCase().replace(/\s+/g, '-');
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const job = jobs.find(job => job.company.toLowerCase().replace(/\s+/g, '-') === hash);
      if (job) {
        setSelectedJob(job);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleJobSelect = (job: Job) => {
    setSelectedJob(job);
    window.location.hash = job.company.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <section
      aria-labelledby="experience-heading"
      role="contentinfo"
      className="experience-section flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-screen gap-4"
    >
      <SectionHeader id="experience" name="experience" />
      <div className="relative w-full">
        {selectedJob && <SelectedJob job={selectedJob} />}
      </div>
      <JobsDrawer jobs={jobs} onJobSelect={handleJobSelect} />
    </section>
  );
};

export default Experience;