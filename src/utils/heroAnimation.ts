"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const heroAnimation = () => {
  if (typeof window === "undefined") return;

  const container = document.querySelector(".hero-parent-container");
  const navigation = document.querySelector(".navbar");

  if (!container || !navigation) return;

  gsap.timeline()
    .to(container, { opacity: 1, scale: 1, duration: 1, ease: "power2.out" })
    .to(navigation, { opacity: 1, y: 0, duration: 0.5 }, "-=0.5");
};
