/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          100: "#f7e7ce", // Lightest
          200: "#eed8a9",
          300: "#e4c984",
          400: "#dcb55f",
          500: "#d4af37", // Base gold
          600: "#b8922d",
          700: "#8e7023",
          800: "#644e19",
          900: "#3a2d0e", // Darkest
        },
      },
    },
  },

  plugins: [],
};
