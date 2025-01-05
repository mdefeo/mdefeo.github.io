"use client";

import React, { useEffect, useState, useRef } from "react";
import Signature from "./Signature";
import { animateBorders } from "@/animations/borderAnimation";
import ViewportBorders from "@/components/ui/animations/ViewportBorders"; // Assuming you need this as well

const AnimationClient: React.FC = () => {
  const [showSignature, setShowSignature] = useState(false);

  // Create refs for the Popover.Button and FontAwesomeIcon elements
  const popoverButtonRef = useRef<HTMLButtonElement | null>(null);
  const iconRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    // Start the border animation and trigger signature after borders complete
    animateBorders(() => {
      setShowSignature(true);  // Trigger the signature animation after borders are done
    }, iconRef, popoverButtonRef); // Pass refs for opacity animation
  }, []);

  return (
    <>
      <ViewportBorders />
      {showSignature && <Signature />}  {/* Show signature after the borders finish */}
    </>
  );
};

export default AnimationClient;
