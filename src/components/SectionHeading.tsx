"use client";
import { SectionHeaderInterface } from "@/interfaces/SectionHeaderInterface.ts";

const SectionHeader: React.FC<SectionHeaderInterface> = ({ id, name }) => {
  return (
    <h2 id={`${id}-heading`} className="sr-only">
      {name}
    </h2>
  );
};

export default SectionHeader;
