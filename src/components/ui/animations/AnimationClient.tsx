"use client";

import React, { useEffect, useState } from "react";
import Signature from "./Signature";
import { animateBorders } from "@/animations/borderAnimation";
import ViewportBorders from "@/components/ui/animations/ViewportBorders";

const AnimationClient: React.FC = () => {
  const [showSignature, setShowSignature] = useState(false);

  useEffect(() => {
    animateBorders(() => {
      setShowSignature(true); 
    });
  }, []);

  return (
    <>
      <ViewportBorders />
      {showSignature && <Signature />}
    </>
  );
};

export default AnimationClient;
