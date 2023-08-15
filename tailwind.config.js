/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "semi-red": "#F87070",
        sky: "#F87070",
        violet: "#D881F8",
        "semi-grey": "#D7E0FF",
        "semi-blu": "#1E213F",
        light: "#FFFFFF",
        "semi-white": "#EFF1FA",
        "dark-blu": "#161932",
      },
    },
  },
  plugins: [],
};
