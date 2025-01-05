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
      colors: {
        "forest-green": "#4B8943",
        "chamoisee": "#B2865D",
        "eerie-black": "#181F22",
        "onyx": "#383A39",
        "battleship-gray": "#928E81",
        "indigo-dye": "#2E435E",
        "black-olive": "#4A4A42",
        "platinum": "#E1E3DE",
        "dun": "#D3C5B7",
        "black-bean": "#381D1F",
        "caput-mortuum": "#66241C",
        "verdigris": "#42B5BA",
        "timberwolf": "#CDCFC2",
        "carmine": "#980B14",
        "jasmine": "#FDD673",
        "jet": "#2D2D29",
        "davys-gray": "#4B4A45",
        "dim-gray": "#7F7361",
        "antiflash-white": "#EFF3F2",
        "umber": "#685A50",
        "white": "#FDFDFD",
        "sunset": "#EDC79C",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      'nord', 
      'night',
      {
        'aTributeToSinclair': {  // Light theme
          primary: "#FBF9F1",
          "primary-content": "#2E435E",
          secondary: "#B7B29E",
          "secondary-content": "#202930",
          accent: "#E1E3DE",
          "accent-content": "#181F22",
          neutral: "#32425C",
          "neutral-content": "#CDCFC2",
          "base-100": "#D9D7D3",
          "base-200": "#CBCBC0",
          "base-300": "#B4AEA2",
          "base-content": "#383A39",
          info: "#62B6BB",
          "info-content": "#4A4C5C",
          success: "#4B8943", 
          "success-content": "#E5E5D3",
          warning: "#FDD673",
          "warning-content": "#E5E5D3",
          error: "#980B14",
          "error-content": "#E5E5D3",
        },
        'aTributeToSinclair-dark': {  // Dark theme
          primary: "#4B8943", // forest-green
          "primary-content": "#E1E3DE", // platinum
          secondary: "#928E81", // battleship-gray
          "secondary-content": "#FDFDFD", // white
          accent: "#42B5BA", // verdigris
          "accent-content": "#FDFDFD", // white
          neutral: "#181F22", // eerie-black
          "neutral-content": "#CDCFC2", // timberwolf
          "base-100": "#181F22", // eerie-black
          "base-200": "#2E435E", // indigo-dye
          "base-300": "#383A39", // onyx (added default value)
          "base-content": "#E1E3DE", // platinum
          info: "#2E435E", // indigo-dye
          "info-content": "#FDFDFD", // white
          success: "#4B8943", // forest-green
          "success-content": "#FDFDFD", // white
          warning: "#FDD673", // jasmine
          "warning-content": "#2D2D29", // jet
          error: "#980B14", // carmine
          "error-content": "#FDFDFD", // white
        }
      },
    ],
  },
};
