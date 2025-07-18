/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      screens: {

        'xs': '320px',
        // => @media (min-width: 320px) { ... }
        'xs-max': '479px',
        // => @media (max-width: 479px) { ... }
        'sm': '500px',
        // => @media (min-width: 640px) { ... }
        'md-max':'768px',
        // => @media (max-width: 760px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
    
    
  },
  plugins: [],
}
