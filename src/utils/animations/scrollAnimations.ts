import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function initSectionTransitions() {
  const sections = gsap.utils.toArray("section") as HTMLElement[];
  const images = document.querySelectorAll(".bg");
  const headings = gsap.utils.toArray(".section-heading") as HTMLElement[];
  const outerWrappers = gsap.utils.toArray(".outer") as HTMLElement[];
  const innerWrappers = gsap.utils.toArray(".inner") as HTMLElement[];

  const splitHeadings = headings.map(
    (heading) => new SplitText(heading, { type: "chars,words,lines", linesClass: "clip-text" })
  );

  let currentIndex = -1;
  let animating = false;

  function gotoSection(index: number, direction: number) {
    // Ensure index wraps within valid range
    const wrap = gsap.utils.wrap(0, sections.length);
    index = wrap(index);
    animating = true;

    const fromTop = direction === -1;
    const dFactor = fromTop ? -1 : 1;
    const tl = gsap.timeline({
      defaults: { duration: 1.25, ease: "power1.inOut" },
      onComplete: () => {
        animating = false; // Perform the assignment
      },
    });

    if (currentIndex >= 0) {
      // The first time this function runs, currentIndex is -1
      gsap.set(sections[currentIndex], { zIndex: 0 });
      tl.to(images[currentIndex], { yPercent: -15 * dFactor })
        .set(sections[currentIndex], { autoAlpha: 0 });
    }

    gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
    tl.fromTo(
      [outerWrappers[index], innerWrappers[index]],
      { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
      { yPercent: 0 },
      0
    )
      .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
      .fromTo(
        splitHeadings[index].chars,
        { autoAlpha: 0, yPercent: 150 * dFactor },
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 1,
          ease: "power2",
          stagger: { each: 0.02, from: "random" },
        },
        0.2
      );

    currentIndex = index;
  }

  ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
      const direction = self.direction === 1 ? 1 : -1;
      if (!animating) {
        gotoSection(currentIndex + direction, direction);
      }
    },
  });

  gotoSection(0, 1); // Initialize the first section
}
