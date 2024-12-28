import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateSections() {
  if (typeof window === "undefined") return;

  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".hero-section");

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });
  });
}

