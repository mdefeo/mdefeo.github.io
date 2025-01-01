import gsap from "gsap";

export const playSignatureAnimation = (onComplete?: () => void) => {
  const svg = document.querySelector(".signature-svg");
  const wrapper = document.querySelector(".signature-wrapper");
  if (!svg || !wrapper) return;

  const paths = svg.querySelectorAll("path");
  if (!paths) return;

  const tl = gsap.timeline({
    defaults: { ease: "power1.out" },
    onComplete: onComplete,
  });
  gsap.set(wrapper, { opacity: 1 });

  paths.forEach((path) => {
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      stroke: "#000",
      strokeWidth: 2.5,
      fill: "none",
    });
  });

  tl.to(
    paths,
    { 
      strokeDashoffset: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      onComplete: () => {
        paths.forEach((path) => {
          path.style.fill = "#000";
        });
      },
    },
    0
  );

  return tl;
};