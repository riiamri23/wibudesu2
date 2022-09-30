/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    // fontFamily: {'body': ['"Poppins"','"Open Sans"', '"Segoe UI"', '"Roboto"'],},
    extend: {},
  },
  plugins: [],
};
