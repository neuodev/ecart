/** @type {import('tailwindcss').Config} */

const commonSpacing = {
  400: 400,
  500: 500,
  600: 600,
  700: 700,
  "70vh": "70vh",
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-black": "#212121",
      },
      spacing: {
        100: 500,
        ...commonSpacing,
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      minHeight: commonSpacing,
      minWidth: commonSpacing,
    },
  },
  plugins: [],
};
