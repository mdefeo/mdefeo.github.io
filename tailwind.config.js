module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light", 
      "dark", 
      "nord",
      {
        philadelphiaPhillies: {
          "primary": "#121F50",
          "primary-content": "#FFFFFF",
          "secondary": "#6F263D",
          "secondary-content": "#FFFFFF",
          "accent": "#6BACE4",
          "accent-content": "#002d72",
          "neutral": "#979C9C",
          "neutral-content": "#292723",
          "base-100": "#FFFFFF",
          "base-200": "#6BACE4",
          "base-300": "#284898",
          "base-content": "#6F263D",
          "info": "#6BACE4",
          "info-content": "#121F50",
          "success": "#046A38",
          "success-content": "#FFFFFF",
          "warning": "#EACA67",
          "warning-content": "#292723",
          "error": "#E81828",
          "error-content": "#FFFFFF",
        },
        philadelphiaFlyers: {
          "primary": "#F74902",
          "primary-content": "#FFFFFF",
          "secondary": "#E65531",
          "secondary-content": "#FFFFFF",
          "accent": "#000000",
          "accent-content": "#F2E6CF",
          "neutral": "#202020",
          "neutral-content": "#F2E6CF",
          "base-100": "#F2E6CF",
          "base-200": "#D35C27",
          "base-300": "#E09D56",
          "base-content": "#000000",
          "info": "#5976AE",
          "info-content": "#FFFFFF",
          "success": "#B59B6E",
          "success-content": "#202020",
          "warning": "#FADF4B",
          "warning-content": "#000000",
          "error": "#E65531",
          "error-content": "#FFFFFF",
        },
        phillySports: {
          "primary": "#071B2C",
          "primary-content": "#B19B69",
          "secondary": "#E35205",
          "secondary-content": "#FFFFFF",
          "accent": "#046A38",
          "accent-content": "#FFFFFF",
          "neutral": "#B19B69",
          "neutral-content": "#E4D7B8",
          "base-100": "#6BACE4",
          "base-200": "#3E8EDE",
          "base-300": "#006bb6",
          "base-content": "#C4CED4",
          "info": "#6BACE4",
          "info-content": "#E4D7B8",
          "success": "#046A38",
          "success-content": "#91999F",
          "warning": "#DF6B35",
          "warning-content": "#E4D7B8",
          "error": "#6F263D",
          "error-content": "#E4D7B8",
        },
      },    
    ],
    darkTheme: "dracula",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
  variants: {
    extend: {
      snapAlign: ["responsive"],
    },
  },
};

/*
PHILLIES
POWDER BLUE #6BACE4;
MAROON #6F263D;
BLUE #284898;
BLUE 2 #002d72;
RED #E81828;

FLYERS
ORANGE #E35205
ORANGE 2 #F74902
Cream #E4D7B8
Black #151515
Orange 3 #DF6B35

EAGLES
Silver (Jersey) #A5ACAF;
Silver (Helmet) #ACC0C6;
Charcoal #565A5C;
Green #046A38;
BLACK #27251F;
Silver (Metallic) #8A8D8F;
Gray (Facemask) #91999F;

76ers
Blue #006bb6;
Red #ed174c;
Navy #002B5C;
Silver #c4ced4;
Red #ed174c;

UNION
Navy Blue: #071B2C;
Gold: #B19B69;
Blue: #3E8EDE;

*/