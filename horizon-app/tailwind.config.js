/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "rgb(129, 136, 151)",
        customDark: "rgb(26, 55, 91)",
        customBlack: "rgb(37, 39, 54)",
      },
    },
  },
  plugins: [],
};
