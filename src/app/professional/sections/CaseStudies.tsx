"use client";
import { useState } from "react";
import { CaseStudiesInterface } from "@/interfaces/CaseStudiesInterface";
import CaseStudy from "@/components/cv/CaseStudyItem";
import caseStudiesData from "@/config/data/experience/caseStudiesData.json";
import { Tab } from "@headlessui/react";

export default function CaseStudies() {
  const [caseStudies] = useState<CaseStudiesInterface[]>(caseStudiesData);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudiesInterface>(caseStudies[0]);

  const handleTabSelect = (study: CaseStudiesInterface) => {
    setSelectedCaseStudy(study); // Dynamically update selected case study
  };

  return (
    <section
      aria-labelledby="case-studies-heading"
      id="case-studies"
      role="contentinfo"
      className="case-studies-section flex flex-col items-center justify-center h-auto md:h-screen gap-4"
    >
      <Tab.Group onChange={(index) => handleTabSelect(caseStudies[index])}>
        <Tab.List className="tabs tabs-bordered mb-6">
          {caseStudies.map((study) => (
            <Tab
              key={study.name}
              className={`tab ${selectedCaseStudy.name === study.name ? "tab-active focus-visible:outline-none text-gray-700 font-semibold" : ""}`}
            >
              {study.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="w-full md:max-w-3xl lg:max-w-7xl">
          {caseStudies.map((study) => (
            <Tab.Panel key={study.name} className="rounded-xl bg-white p-6">
              <CaseStudy caseStudy={study} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}
