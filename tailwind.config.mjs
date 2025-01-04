import daisyui from "daisyui";

/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      'nord', 
      'night',
      {
        'aTributeToSinclair': {  // Ensure the key for the theme is properly wrapped
          primary: "#a97f60",
          "primary-content": "#f1f0e8",
          secondary: "#8d7d6c",
          "secondary-content": "#f7f5eb",
          accent: "#c4a69f",
          "accent-content": "#ece6da",
          neutral: "#4f4f4f",
          "neutral-content": "#d8d8d8",
          "base-100": "#f2f1ec",
          "base-200": "#e5e3da",
          "base-300": "#d2cfc4",
          "base-content": "#2f2f2f",
          info: "#b1c6d1",
          "info-content": "#3a3a3a",
          success: "#6d8e6e",
          "success-content": "#2a3a2a",
          warning: "#c49350",
          "warning-content": "#f1e6c9",
          error: "#b5735b",
          "error-content": "#3a1e1e",
        },
      },
    ],
  },
};
