"use client";

import React, { useEffect, useState, useRef } from "react";
import Signature from "./Signature";
import { animateBorders } from "@/animations/borderAnimation";
import ViewportBorders from "@/components/ui/ViewportBorders";

const AnimationClient: React.FC = () => {
  const [showSignature, setShowSignature] = useState(false);

  const popoverButtonRef = useRef<HTMLButtonElement | null>(null);
  const iconRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    animateBorders(() => {
      setShowSignature(true); 
    }, iconRef, popoverButtonRef);
  }, []);

  return (
    <>
      <ViewportBorders />
      {showSignature && <Signature />}
    </>
  );
};

export default AnimationClient;