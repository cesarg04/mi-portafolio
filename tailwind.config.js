module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '850px',
      // => @media (min-width: 850px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
        backicons: '#F7F8FC',
        bluepage: '#53ADC0',
        primarybutton: '#EEF2FF',
        hoverbutton: '#6265F1',
        h1Secondary: '#9CA3AF'
        
      }, 
      fontFamily:{
        rubik: ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
}

