/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#f63c41",
        background: "#d7d6e5",
        primary: "#1f3063",
      },
    },
  },
  plugins: [],
};
