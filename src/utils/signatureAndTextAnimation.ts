import { gsap } from "gsap";
import { FADE_IN_DURATION, FADE_OUT_DURATION, PHRASE_DELAY } from "@/config/constants/index";


export const signatureAndTextAnimation = (
  signatureSelector: string,
  textElements: NodeListOf<HTMLElement>
) => {
  // Ensure all phrases are hidden initially
  gsap.set(textElements, { opacity: 0 });

  const timeline = gsap.timeline();

  // Animate the signature once and avoid duplicate movement
  timeline
    .to(signatureSelector, {
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
    })
    .to(
      signatureSelector,
      {
        yPercent: -30,
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => console.log("Signature animation completed."),
      },
      "+=0.5" // Ensure no overlap with the text animation
    )
    .to({}, { duration: 0.5 }); // Adds a short delay

  // Animate text phrases one by one
  textElements.forEach((el, i) => {
    timeline.to(
      el,
      {
        opacity: 1,
        duration: FADE_IN_DURATION,
        ease: "power3.out",
        onStart: () => el.classList.remove("invisible"),
      },
      `+=${i === 0 ? 0.4 : PHRASE_DELAY}`
    );
    if (i < textElements.length - 1) {
      timeline.to(
        el,
        { opacity: 0, duration: FADE_OUT_DURATION, ease: "power3.out" },
        `+=${PHRASE_DELAY}`
      );
    }
  });

  // Restart the timeline after all animations complete
  timeline.eventCallback("onComplete", () => {
    console.log("Animation sequence complete. Restarting...");
    timeline.restart();
  });
};
