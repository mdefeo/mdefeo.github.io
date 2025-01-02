"use client";

import { FC } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RecognitionItem as RecognitionItemType } from "@/interfaces/RecognitionInterface"; // Import the recognition interface

const RecognitionItem: FC<{ recognition: RecognitionItemType }> = ({ recognition }) => {
  return (
    <div className="relative group">
      <div className="flex items-center space-x-4 mb-4">
        <div className="timeline-start">{recognition.year}</div>
        <div className="timeline-middle">
          <FontAwesomeIcon
            icon={recognition.icon ? recognition.icon : "faTrophy"} // Default to "faTrophy" if no icon is specified
            className="h-5 w-5 text-gray-500"
          />
        </div>
        <div className="timeline-end timeline-box">
          <Link href={recognition.url} target="_blank" rel="noopener noreferrer">
            <span className="font-semibold text-md text-blue-500 hover:text-blue-600 group-hover:text-blue-800">
              {recognition.name}
            </span>
          </Link>
        </div>
      </div>

      {/* Tooltip using Tailwind CSS */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-2 mt-2 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <strong>Source:</strong> ${recognition.source} <br/>
              <strong>Category:</strong> ${recognition.category} <br/>
              <strong>Year:</strong> ${recognition.year}
            `,
          }}
        />
      </div>

      <hr />
    </div>
  );
};

export default RecognitionItem;