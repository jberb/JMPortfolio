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
      },
      fontFamily: {
        body: ["Lobster"],
        tektur: ["Tektur"],
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wave: "wave 2s infinite ",
        transform: "70% 70%",
      },
    },
  },
  plugins: [],
};
