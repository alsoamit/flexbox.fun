/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '400px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: '#181818',
        secondary: '#161616',
        tertiary: '#00AEEF',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
