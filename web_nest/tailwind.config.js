/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f8b6d1", // Light pink color
        secondary: "#ed8900", // Orange color for secondary
      }
    },
  },
  plugins: [],
}
