"use client";

import React, { useEffect, useState, useRef } from "react";
import { animateBorders } from "@/animations/borderAnimation";
import ViewportBorders from "@/components/ui/ViewportBorders";

const AnimationClient: React.FC = () => {

  const popoverButtonRef = useRef<HTMLButtonElement | null>(null);
  const iconRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    animateBorders(() => {
    }, iconRef, popoverButtonRef);
  }, []);

  return (
    <>
      <ViewportBorders />
    </>
  );
};

export default AnimationClient;
