/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7F1EA",
        cocoa: "#365247",
        coral: "#F6BBB4",
        honey: "#FFD97D",
        mint: "#C7E5CC",
        skybaby: "#B9D9F6",
        lavender: "#DCEAF8",
        paper: "#FFFCF8",
        kraft: "#D8C3A5",
      },
      fontFamily: {
        display: ['"Baloo 2"', "Nunito", "system-ui", "sans-serif"],
        body: ["Nunito", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(54, 82, 71, 0.12)",
        button: "0 12px 28px rgba(54, 82, 71, 0.18)",
      },
    },
  },
  plugins: [],
};
