/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      crimson: ["Crimson-Text", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "bg-1": "url('/src/Assets/home-bg.jpg')",
        "b-2": "url('/src/Assets/home-bg.jpg')",
      },
    },
  },
  plugins: [],
};
