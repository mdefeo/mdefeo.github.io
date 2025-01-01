"use client";
import { CaseStudyProps } from "@/interfaces/CaseStudiesInterface";
import Image from "next/image";

export default function CaseStudyComponent({ caseStudy }: CaseStudyProps) {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
      <div className="w-full md:w-1/3">
        <Image
          src={`/images/projects/${caseStudy.image}`}
          alt={caseStudy.name}
          width={500}
          height={300}
          className="object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-2/3">
        <h3 className="text-xl font-semibold">{caseStudy.name}</h3>
        <p className="text-gray-600 mb-4">{caseStudy.description}</p>
        <p>{caseStudy.details}</p>
      </div>
    </div>
  );
}
