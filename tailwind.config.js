/* tailwind.config.js */

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js" 
  ],
  theme: {
    extend: {
      colors: {
        green: {
          claro: '#E8FFD3',
          light: '#bbecab',
          dark: '#003023',
          hover: '#1C8C63',
          botao: "#38A673",
          
        },
        gray : {
          fundo : '#424242',
          texto : '#f8f8f8' ,
          inputs : '#353535'
        }
        
        
      } , 
      fontFamily: {
        'mplus': ['M PLUS Rounded 1c', 'sans-serif'],
       
      } ,
      
    } ,
    screens: {
      'cp': { 'min': '320px', 'max': '640px' },
      'sm' : {'min' : '640px' , 'max' : '768px'},
      'md' : {'min' : '768px' , 'max' : '1024px'},
      'lg' : {'min' : '1024px' , 'max' : '1280px'},
      'xl' : {'min' : '1280px' , 'max' : '1536px'},
      '2xl' : {'min' : '1536px' , }
    } ,
   
  },

  

  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
    require('tailwindcss-animated')
  ],
}
 
