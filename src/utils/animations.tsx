import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const playHeroAnimation = (onComplete?: () => void) => {
  const container = document.querySelector(".hero-parent-container");
  const navigation = document.querySelector(".navbar");
  const mainContent = document.querySelector(".hero-content-container");
  if (!container || !navigation || !mainContent) return;

  // Ensure the initial state of elements
  gsap.set(container, { opacity: 0, scale: 0.75 });
  gsap.set(navigation, { opacity: 0, y: -50 });
  gsap.set(mainContent, { opacity: 0, y: 50 });

  const tl = gsap.timeline({
    onComplete: () => {
      if (onComplete) onComplete();
    },
  });

  // Hero animation
  tl.to(container, {
    duration: 1,
    opacity: 1,
    scale: 1,
    ease: "power2.out",
  });

  // Navigation fade-in
  tl.to(
    navigation,
    {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: "power2.out",
    },
    "-=0.5" // Start overlapping with the previous animation
  );

  // Main content fade-in
  tl.to(
    mainContent,
    {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: "power2.out",
    },
    "-=0.3" // Start overlapping with navigation animation
  );

  return tl;
};

export const playSignatureAnimation = () => {
  const svg = document.querySelector(".signature-svg");
  const wrapper = document.querySelector(".signature-wrapper");
  if (!svg || !wrapper) return;

  const paths = svg.querySelectorAll("path");
  if (!paths) return;

  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  gsap.set(wrapper, { visibility: "hidden" });

  paths.forEach((path) => {
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      stroke: "#fff",
      strokeWidth: 2.5,
      fill: "none",
      opacity: 0,
    });
  });

  tl.to(wrapper, { visibility: "visible", duration: 0.25 })
    .to(
      paths,
      {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        onComplete: () => {
          paths.forEach((path) => {
            path.style.fill = "#fff";
          });
        },
      },
      0
    );

  return tl;
};

export const playParallaxAnimation = (container: HTMLElement | null) => {
  if (!container) return;

  const leftColumn = container.querySelector(".left-column");
  const rightColumn = container.querySelector(".right-column");

  if (leftColumn) {
    gsap.fromTo(
      leftColumn,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }

  if (rightColumn) {
    gsap.fromTo(
      rightColumn,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }
};

// Scroll-triggered animation for hero sections
export const setupHeroSectionScrollAnimation = () => {
  const heroSections = document.querySelectorAll(".hero-section");

  heroSections.forEach((section, index) => {
    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          markers: false, // Enable for debugging
        },
      }
    );
  });
};