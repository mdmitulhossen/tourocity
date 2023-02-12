/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  mode:"jit",
  theme: {
    extend: {
      screens: {
        'lg': '1150px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [require('flowbite/plugin'),require('tailwind-scrollbar')],
}