/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Inter",
      },
      container: {
        center: true,
        screens: {
          lg: "1110px",
        },
      },
    },
  },
  plugins: [],
};
