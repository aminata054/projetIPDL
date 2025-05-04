/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {colors: {
      'afrik-red': '#c44241',
      'afrik-light-red': '#cf6d60',
      'afrik-purple': '#7d63d7',
      'afrik-cream': '#fffdc3',
      'afrik-dark': '#40191d',
    },},
  },
  plugins: [],
}
