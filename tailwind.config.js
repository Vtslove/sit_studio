/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        "body-text": "Epilogue",
        inter: "Inter",
      },
    },
    fontSize: {
      mid: "17px",
      xl: "20px",
      base: "16px",
      "81xl": "100px",
      "11xl": "30px",
      "31xl": "50px",
      "9xl": "28px",
      inherit: "inherit",
    },
    screens: {
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
