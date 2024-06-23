/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14adcc",
        secondary: "#046ab4",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}