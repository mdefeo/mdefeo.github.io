"use client";
import { useState } from "react";
import { CaseStudiesInterface } from "@/interfaces/CaseStudiesInterface";
import CaseStudy from "@/components/cv/CaseStudyItem";
import caseStudiesData from "@/config/data/experience/caseStudiesData.json";

export default function CaseStudies() {
  const [caseStudies] = useState<CaseStudiesInterface[]>(caseStudiesData);

  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudiesInterface>(caseStudies[0]);

  return (
    <section
      aria-labelledby="case-studies-heading"
      role="contentinfo"
      className="case-studies-section gap-4"
    >
      <div className="tabs tabs-bordered mb-6">
        {caseStudies.map((study) => (
          <button
            key={study.name}
            onClick={() => setSelectedCaseStudy(study)}
            className={`tab ${selectedCaseStudy.name === study.name ? "tab-active text-gray-700 font-semibold" : ""}`}
          >
            {study.name}
          </button>
        ))}
      </div>
      <CaseStudy caseStudy={selectedCaseStudy} />
    </section>
  );
}