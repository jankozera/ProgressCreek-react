/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        'container': '1440px'
      },
      colors: {
        black: {
          primary: '#070707',
        },
        green: {
          primary: '#06D6A0',
        },
      },
    },
  },
  plugins: [],
};
