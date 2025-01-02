"use client";
import React, { useState, useEffect } from "react";
import Signature from "@/components/about/signature/Signature";
import gsap from "gsap";

export default function LoadingScreen({ onAnimationEnd }: { onAnimationEnd: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    const hasHash = window.location.hash;

    if (!hasVisited && !hasHash) {
      setIsVisible(true);
      localStorage.setItem("hasVisited", "true");
    } else {
      setIsRemoved(true);
      onAnimationEnd();
    }
  }, [onAnimationEnd]);

  const handleSignatureComplete = () => {
    gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        setTimeout(() => {
          setIsRemoved(true);
          onAnimationEnd();
        }, 1000);
      },
    });
  };

  useEffect(() => {
    if (!isVisible) {
      const timeout = setTimeout(() => {
        document.querySelector(".loading-screen")?.classList.add("fade-out");
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  if (isRemoved) {
    return null;
  }

  return (
    <div
      className={`loading-screen ${!isVisible ? "fade-out" : ""}`}
      aria-labelledby="loading-heading"
      role="contentinfo"
    >
      <section className="flex flex-col items-center justify-center h-full relative bg-gray-200">
        <div className="relative w-full h-full flex justify-center items-center">
          <div className="absolute z-10">
            <Signature onComplete={handleSignatureComplete} />
          </div>
        </div>
      </section>
    </div>
  );
}