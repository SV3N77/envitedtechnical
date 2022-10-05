/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffff",
      black: "#000",
      primary: {
        0: "#E87BF8",
        1: "#240D57",
        2: "#501FC1",
        3: "#8456EC",
      },
      secondary: { 0: "#CCB6FF", 1: "#EDE5FF", 2: "#F6F2FF" },
      alert: {
        "negative-light": "#FFD7E0",
        "negative-dark": "#E61445",
        "positive-light": "#D3FFE2",
        "positive-dark": "#00805E",
      },
      neutrals: {
        0: "#4F4F4F",
        1: "#828282",
        2: "#BDBDBD",
        3: "#E0E0E0",
        4: "#F2F2F2",
        5: "#FBFAFF",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
