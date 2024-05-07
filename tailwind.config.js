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
          dark: '#8C9857',
          hover: '#5D6634'
        }

      },
      fontFamily: {
        'mplus': ['M PLUS Rounded 1c', 'sans-serif'],
       
      }
    }
  },
  plugins: [],
}
