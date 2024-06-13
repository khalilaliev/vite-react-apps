/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#353535",
      },
    },

    container: {
      center: true,
      padding: "2rem",
    },
    // extend: {},
  },
  plugins: [require("rippleui")],
};
