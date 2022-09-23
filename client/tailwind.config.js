/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        100: 500,
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
    },
  },
  plugins: [],
};
