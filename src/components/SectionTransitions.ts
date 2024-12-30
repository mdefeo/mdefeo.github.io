// /src/components/SectionTransitions.tsx
// /src/components/SectionTransitions.tsx
"use client";

import { useEffect } from "react";

const SectionTransitions = () => {
  useEffect(() => {
    // Select all sections with the 'data-slide' attribute
    const sections = document.querySelectorAll('[data-slide]');

    // Initialize IntersectionObserver
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          // If the section is in the viewport
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add the 'visible' class for animation
            observer.unobserve(entry.target); // Stop observing after it's visible
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is in view
      }
    );

    // Observe each section
    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return null; // This component does not render anything directly
};

export default SectionTransitions;
