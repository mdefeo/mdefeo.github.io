"use client";
import { useState } from "react";
import jobs from "@/data/json/jobs.json";
import SelectedJob from "@/components/cv/SelectedJob"; 
import { JobInterface } from "@/interfaces/JobInterface.ts";
import SectionHeader from "@/components/SectionHeading";

export default function Professional() {
  const [selectedJob] = useState<JobInterface>(jobs[0]);

  return (
    <section aria-labelledby="professional-heading" role="contentinfo">
      <SectionHeader id="professional" name="Professional" />
      <SelectedJob job={selectedJob} />

    </section>
  );
}
