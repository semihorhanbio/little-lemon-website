/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla"],
        markazi: ["Markazi Text"],
      },
      colors: {
        "yellow-primary": "#f4ce14",
        "gray-primary": "#495E57",
        "pink-secondary": "#ee9972",
        "tan-secondary": "#fbdadd",
        "white-highlight": "#edefee",
        "black-highlight": "#333333",
      },
    },
  },
  plugins: [],
};
