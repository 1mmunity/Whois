const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        emerald: colors.emerald,
        cyan: colors.cyan,
        bluegrey: colors.blueGray,
        orange: colors.orange,
        rose: colors.rose,
        violet: colors.violet,
        fuchsia: colors.fuchsia
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
