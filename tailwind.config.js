/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "semi-red": "#F87070",
        sky: "#70F3F8",
        violet: "#D881F8",
        "semi-grey": "#D7E0FF",
        "semi-blu": "#1E213F",
        light: "#FFFFFF",
        "semi-white": "#EFF1FA",
        "dark-blu": "#161932",
        modal: "#0A0C1C80",
      },
      width: {
        75: "18.75rem",
      },
      height: {
        75: "18.75rem",
      },
      backgroundImage: {
        session: "linear-gradient(315deg, #2E325A 0%, #0E112A 100%)",
      },
    },
  },
  plugins: [],
};
