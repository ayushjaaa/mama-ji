/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // enable dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#3b82f6",
        text: "var(--color-text)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
    },
  },
  plugins: [],
};
