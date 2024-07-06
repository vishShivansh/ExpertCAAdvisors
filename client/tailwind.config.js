/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2sm": { max: "500px" },
    },
    extend: {},
  },

  plugins: [],
};
