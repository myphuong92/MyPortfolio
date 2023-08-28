/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      vt323: ["VT323"],
      heading: ["Oswald"],
      desc: ["Quattrocento"],
      sans: ["Open Sans"],
    },
  },
  plugins: [],
};
