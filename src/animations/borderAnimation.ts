import { gsap } from "gsap";
import { ANIMATION_DURATION, FINAL_WIDTH, FINAL_HEIGHT, EASE, END_BORDER_CLASS } from "@/config/constants/animation"; // Import constants

export const animateBorders = (callback: () => void, iconRef: React.RefObject<SVGSVGElement>, buttonRef: React.RefObject<HTMLButtonElement>) => {
  const borders = {
    top: document.querySelector('.border-top') as HTMLElement | null,
    right: document.querySelector('.border-right') as HTMLElement | null,
    bottom: document.querySelector('.border-bottom') as HTMLElement | null,
    left: document.querySelector('.border-left') as HTMLElement | null,
  };

  if (borders.top && borders.right && borders.bottom && borders.left) {
    gsap.to([borders.top, borders.right, borders.bottom, borders.left], {
      duration: ANIMATION_DURATION,
      opacity: 1,
      ease: EASE,
    });

    gsap.to(borders.top, {
      duration: ANIMATION_DURATION,
      width: FINAL_WIDTH,
      ease: EASE,
      onComplete: () => {
        gsap.to(borders.right, {
          duration: ANIMATION_DURATION,
          height: FINAL_HEIGHT,
          ease: EASE,
          onComplete: () => {
            gsap.to(borders.bottom, {
              duration: ANIMATION_DURATION,
              width: FINAL_WIDTH,
              ease: EASE,
              transformOrigin: "right center",
              onComplete: () => {
                gsap.to(borders.left, {
                  duration: ANIMATION_DURATION,
                  height: FINAL_HEIGHT,
                  ease: "sine.in",
                  onComplete: () => {
                    gsap.to([borders.top, borders.right, borders.bottom, borders.left], {
                      duration: 0.2,
                      onComplete: () => {
                        borders.top?.classList.add(END_BORDER_CLASS);
                        borders.right?.classList.add(END_BORDER_CLASS);
                        borders.bottom?.classList.add(END_BORDER_CLASS);
                        borders.left?.classList.add(END_BORDER_CLASS);
                      },
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }

  // Also, trigger opacity change for the button and icon after the borders are complete
  if (iconRef.current && buttonRef.current) {
    gsap.fromTo(
      [iconRef.current, buttonRef.current],
      { opacity: 0 }, // Start with opacity 0
      { opacity: 1, duration: 1.5, ease: "power2.out" } // Animate to opacity 1
    );
  }
};
