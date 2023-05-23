/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        volkhof: ["Volkhov", "serif"],
      },
      colors: {
        dark: "#0f172a",
        primary: "#dc2626",
        secondary: "#cbd5e1",
      },
    },
  },
  plugins: [],
};
