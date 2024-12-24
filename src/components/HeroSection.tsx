import React, { useEffect, useRef } from "react";
import { HeroSectionProps } from "../interfaces/HeroSectionProps";

const HeroSection: React.FC<HeroSectionProps> = ({ reverse = false, children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Play parallax or any other animation tied to this section
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center justify-center flex-grow h-full w-full px-6 md:px-16 lg:px-20`}
    >
      <div className="left-column flex-grow w-full md:w-1/2 lg:w-1/3 text-center md:text-left space-y-4">
        {children && Array.isArray(children) ? children[0] : children}
      </div>
      <div className="right-column flex-grow w-full md:w-1/2 lg:w-2/3 flex items-center justify-center">
        {children && Array.isArray(children) ? children[1] : null}
      </div>
    </section>
  )
};

export default HeroSection;
