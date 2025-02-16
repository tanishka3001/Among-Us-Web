/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gratelos: ["Gratelos"],
        dmSans: ["DM Sans", "sans-serif"],
      },
      keyframes: {
        twinkle: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        twinkle: "twinkle 3s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
