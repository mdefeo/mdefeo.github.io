"use client";

import React, { useRef } from "react";
import Signature from "@/components/ui/Signature";
import AnimatedText from "./components/AnimatedText";

const HomeContent: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex items-center justify-center min-h-screen w-full flex-col text-center">
      <div className="signature-wrapper mb-4">
        <Signature />
      </div>

      <div
        ref={textRef}
        className="text-lg font-medium relative h-10 w-full max-w-[80vw] overflow-hidden flex justify-center items-center"
      >
        <span className="phrase absolute w-full text-center invisible">
          Full-Stack Engineer
        </span>
        <span className="phrase absolute w-full text-center invisible">
          MBA Candidate
        </span>
        <span className="phrase absolute w-full text-center invisible">
          Musician Hobbyist
        </span>
      </div>

      <AnimatedText textRef={textRef} />
    </div>
  );
};

export default HomeContent;
