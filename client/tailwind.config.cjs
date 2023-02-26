/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { transform: "translateX(-1%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        popIn: {
          "0%": { transform: "scale(0) translateY(40%)" },
          "100%": { transform: "scale(1) translateY(40%)" },
        },
        popIn1: {
          "0%": { transform: "scale(0) " },
          "100%": { transform: "scale(1) " },
        },
      },
      colors: {
        primary: "#6366F1",
        title: "0F1827",
        subtitle: "70757E",
        background: "",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
