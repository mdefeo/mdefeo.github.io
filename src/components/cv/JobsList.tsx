import { JobListProps } from "../../interfaces/JobInterface";

const JobList: React.FC<JobListProps> = ({ jobs, selectedJob, onJobSelect }) => {
  return (
    <div className="flex flex-col space-y-4">
      {jobs.map((job) => (
        <div
          key={job.id}
          className={`p-4 min-w-[200px] ${
            selectedJob.id === job.id ? "bg-slate-50 shadow-2xl rounded-xl opacity-55" : "bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 cursor-pointer"
          }`}
          onClick={() => onJobSelect(job)}
        >
          <div className="flex items-center space-x-2">
            <div>
              <h6 className="text-gray-600">{job.listCompany}</h6>
              <p className="text-sm text-gray-500">{job.listTitle}</p>
              <p className="text-xs text-gray-500">{job.location} | {job.years}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;