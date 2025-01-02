"use client";

import { FC } from "react";
import recognitionData from "@/data/json/recognition.json";
import { RecognitionItem } from "@/interfaces/RecognitionInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  faTrophy,
};

const Recognition: FC = () => {
  const recognition: RecognitionItem[] = recognitionData.recognition;

  return (
    <div className="overflow-x-auto">
      <ul className="timeline flex space-x-8">
        {recognition.map((item, index) => (
          <li key={index} className="flex flex-col items-center">
            <div className="timeline-box">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={iconMap[item.icon as keyof typeof iconMap]} className="text-primary h-5 w-5" />
                <span>{item.year}</span>
              </div>
              <h3 className="font-bold">{item.name}</h3>
              <p>{item.description}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {item.source}
              </a>
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-primary h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {index < recognition.length - 1 && <hr className=" w-full" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recognition;