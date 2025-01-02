import { SelectedJobProps } from "../../interfaces/JobInterface";
import Image from "next/image";
import SkillIcon from "@/components/ui/SkillIcon";

const SelectedJob: React.FC<SelectedJobProps> = ({ job }) => {
  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row sm:space-x-8">
        {job.logo && (
          <div className="flex-shrink-0 mb-4 sm:mb-0">
            <Image
              src={job.logo}
              alt={`${job.company} Logo`}
              width={80}
              height={80}
              className="object-contain rounded-full"
            />
          </div>
        )}
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h4 className="mb-0 text-gray-600">{job.company}</h4>
            <p className="text-right text-md">{job.years}</p>
          </div>
          <div className="flex justify-between items-top">
            <p className="text-lg text-gray-500 mb-2">{job.title}</p>
            <p className="text-right text-sm text-gray-400">{job.location}</p>
          </div>
          <ul className="text-sm m-0 pl-3 text-gray-500 list-disc">
            {job.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
          <div className="mt-8">
            <div className="grid grid-cols-12 gap-4">
              {job.technologies.map((tech, index) => (
                <SkillIcon key={index} name={tech.icon} alt={tech.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedJob;