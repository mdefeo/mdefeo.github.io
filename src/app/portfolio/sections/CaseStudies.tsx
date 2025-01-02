"use client";
import { useState } from "react";
import { CaseStudiesInterface } from "@/interfaces/CaseStudiesInterface";
import CaseStudy from "@/components/portfolio/CaseStudy";
import caseStudiesData from "@/data/json/caseStudies.json";
import SectionHeader from "@/components/ui/SectionHeading";

export default function CaseStudies() {
  const [caseStudies] = useState<CaseStudiesInterface[]>(caseStudiesData);

  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudiesInterface>(caseStudies[0]);

  return (
    <section
      aria-labelledby="case-studies-heading"
      role="contentinfo"
      className="case-studies-section gap-4"
    >
      <SectionHeader id="case-studies-heading" name="Case Studies" />
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