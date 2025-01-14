import daisyui from "daisyui";

/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "image-perspective": "transformPerspective 1s ease-out .5s 1 forwards",
      },
      keyframes: {
        transformPerspective: {
          "0%": { transform: "perspective(1800px) rotateY(90deg)", opacity: 0 },
          "100%": { transform: "none", opacity: 1 },
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      'nord', 
      'night',
      {
        'aTributeToSinclair': {
          primary: "#F5F2E9",
          "primary-content": "#29344E",
          secondary: "#D1CAB2",
          "secondary-content": "#44557B",
          accent: "#E1E3DE",
          "accent-content": "#6078AB",
          neutral: "#29344E",
          "neutral-content": "#CDCFC2",
          "base-100": "#CDCAC3",
          "base-200": "#A5A39D",
          "base-300": "#807D79",
          "base-content": "#3A3937",
          info: "#628CBB",
          "info-content": "#333C5E",
          success: "#7B886B", 
          "success-content": "#F3F2F0",
          warning: "#FDD673",
          "warning-content": "#F3F2F0",
          error: "#D03052",
          "error-content": "#F3F2F0",
        }
      },
    ],
  },
};