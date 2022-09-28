/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#f5f5f5",
        gray: "#a4a3a2",
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: "#f0c808",
        gold: {
          100: "#f5f3f4",
          200: "#f7e7b7",
          300: "#fadb7a",
          400: "#fcce3d",
          500: "#fec200",
        },
      },
      fontFamily: {
        header: ["header", "sans-serif"],
        paragraph: ["paragraph", "sans-serif"],
      },
    },
  },
  plugins: [],
};
