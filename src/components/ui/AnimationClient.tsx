"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from 'next/navigation'; // Import from next/navigation for App Directory
import Signature from "./Signature";
import { animateBorders } from "@/animations/borderAnimation";
import ViewportBorders from "@/components/ui/ViewportBorders";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { observeImages, addGlobalClickListener } from "@/animations/elementObserver";

gsap.registerPlugin(ScrollTrigger);

const AnimationClient: React.FC = () => {
  const [showSignature, setShowSignature] = useState(false);
  const router = useRouter(); // Using the hook from next/navigation

  const popoverButtonRef = useRef<HTMLButtonElement | null>(null);
  const iconRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    // Observe images and add global click listener
    observeImages();
    addGlobalClickListener();

    animateBorders(() => {
      setShowSignature(true);
    }, iconRef, popoverButtonRef);

    // Since we don't have routeChangeComplete in App Directory, we directly call observeImages
    // No need to handle route changes like in the Pages Directory

  }, []); // Empty dependency array, as we're only doing initialization on mount

  return (
    <>
      <ViewportBorders />
      {showSignature && <Signature />}
    </>
  );
};

export default AnimationClient;
