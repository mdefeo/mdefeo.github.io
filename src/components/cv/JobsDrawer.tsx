// /components/cv/JobsDrawer.tsx
import { useState, useEffect } from 'react';
import { JobListProps, Job } from "../../interfaces/JobInterface"; 
import Image from "next/image";

const JobsDrawer: React.FC<JobListProps> = ({ jobs, onJobSelect }) => {
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const job = jobs.find(job => job.company.toLowerCase().replace(/\s+/g, '-') === hash);
    if (job) {
      setSelectedJobId(job.id);
      onJobSelect(job);
    } else {
      setSelectedJobId(jobs[0].id);
      onJobSelect(jobs[0]);
    }
  }, [jobs, onJobSelect]);

  const handleJobSelect = (job: Job) => {
    setSelectedJobId(job.id);
    onJobSelect(job); 
  };

  return (
    <div className="fixed top-0 right-0 h-full w-20 z-10 p-2 flex flex-col items-center justify-center">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="relative p-3 flex flex-col items-center"
          onClick={() => handleJobSelect(job)}
        >
          <Image
            src={job.logo}
            alt={`${job.company} Logo`}
            width={50}
            height={50}
            className={`object-contain rounded-full transition-all duration-300 ease-out transform  
              ${selectedJobId === job.id ? 'opacity-30' : 'cursor-pointer hover:scale-150 hover:mr-7'}`}
          />
        </div>
      ))}
    </div>
  );
};

export default JobsDrawer;