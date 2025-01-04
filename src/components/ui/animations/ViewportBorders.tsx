"use client";

import React, { useEffect } from "react";
import { animateBorders } from "@/animations/borderAnimation";

const ViewportBorders: React.FC = () => {
  useEffect(() => {
    if (
      document.querySelector('.border-top') &&
      document.querySelector('.border-right') &&
      document.querySelector('.border-bottom') &&
      document.querySelector('.border-left')
    ) {
      animateBorders(() => {
      });
    }
  }, []);

  return (
    <>
      <div className="border-top sm:w-[5vw] md:w-[10vw] lg:w-[15vw]"></div>
      <div className="border-right sm:h-[5vh] md:h-[10vh] lg:h-[15vh]"></div>
      <div className="border-bottom sm:w-[5vw] md:w-[10vw] lg:w-[15vw]"></div>
      <div className="border-left sm:h-[5vh] md:h-[10vh] lg:h-[15vh]"></div>
    </>
  );
};

export default ViewportBorders;
