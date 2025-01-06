"use client";

import React, { useEffect, useRef } from "react";
import { animateBorders } from "@/animations/borderAnimation";

const ViewportBorders: React.FC = () => {
  const iconRef = useRef<SVGSVGElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (
      document.querySelector('.border-top') &&
      document.querySelector('.border-right') &&
      document.querySelector('.border-bottom') &&
      document.querySelector('.border-left')
    ) {
      animateBorders(() => {}, iconRef, buttonRef);
    }
  }, []);

  return (
    <>
      <div className="border-top fixed sm:w-[5vw] md:w-[10vw] lg:w-[15vw]"></div>
      <div className="border-right fixed sm:h-[5vh] md:h-[10vh] lg:h-[15vh]"></div>
      <div className="border-bottom fixed sm:w-[5vw] md:w-[10vw] lg:w-[15vw]"></div>
      <div className="border-left fixed sm:h-[5vh] md:h-[10vh] lg:h-[15vh]"></div>
    </>
  );
};

export default ViewportBorders;