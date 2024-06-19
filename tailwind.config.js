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
    } ,
    screens: {
      'cp': { 'min': '320px', 'max': '640px' },
      'sm' : {'min' : '640px' , 'max' : '768px'},
      'md' : {'min' : '768px' , 'max' : '1024px'},
      'lg' : {'min' : '1024px' , 'max' : '1280px'},
      'xl' : {'min' : '1280px' , 'max' : '1536px'},
      '2xl' : {'min' : '1536px' , }
    }
  },

  

  plugins: [
    require('@tailwindcss/forms')
  ],
}
 