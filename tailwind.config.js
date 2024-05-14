/* tailwind.config.js */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          light: '#DDE5D5',
          dark: '#316906',
          hover: '#365B1A'
        }

      },
      fontFamily: {
        'mplus': ['M PLUS Rounded 1c', 'sans-serif'],
       
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
 