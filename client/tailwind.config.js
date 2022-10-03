/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-black": "#212121",
      },
      spacing: {
        100: 500,
        "70vh": "70vh",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      minHeight: {
        400: 400,
        500: 500,
        600: 600,
        700: 700,
      },
      minWidth: {
        400: 400,
        500: 500,
        600: 600,
        700: 700,
      },
    },
  },
  plugins: [],
};
