"use client";
import React, { useState } from "react";
import { CaseStudies, Experience, Entrepreneurship } from "./sections";
import { ExperienceListItemProps } from "@/interfaces/ExperienceListInterface";

export default function CVPage() {
const [selectedExperience, setSelectedExperience] = useState<ExperienceListItemProps | null>(null);

const onExperienceSelect = (experience: ExperienceListItemProps) => {
  setSelectedExperience(experience);
};

return (
  <>
    <Experience onExperienceSelect={onExperienceSelect} />
    <CaseStudies />
    <Entrepreneurship />
  </>
);
}
