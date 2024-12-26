import gsap from "gsap";

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
      stroke: "#000",
      strokeWidth: 2.5,
      fill: "none",
      opacity: 0,
    });
  });

  tl.to(wrapper, { visibility: "visible", duration: 0 })
    .to(
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
