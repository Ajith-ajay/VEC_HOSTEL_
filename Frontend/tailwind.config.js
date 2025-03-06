/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'selector',
  theme: {
      extend: {
          fontFamily: {
              'rome': ['Times New Roman', 'ui-sans-serif', 'system-ui'],
              'comf': ['Comfortaa', 'ui-sans-serif', 'system-ui'],
              'popp': ['Futura PT', 'ui-sans-serif', 'system-ui']
          },
          colors: {
              'prim': '#fff',
              'secd': '#fdcc03',
              'accn': '#800000',
              'text': '#000',
              'drkp': '#1A1A1A',
              'drks': '#004D61',
              'drka': '#FF6F61',
              'drkt': '#F0F0F0',
              // 'drkp': '#0F0F0F',
              // 'drks': '#005B41',
              // 'drka': '#232D3F',
              // 'drkt': '#008170',
              // 'drkp': '#180161',
              // 'drks': '#4F1787',
              // 'drka': '#FB773C',
              // 'drkt': '#EB3678',
              // 'drkp': '#222831',
              // 'drks': '#2268ff',
              // 'drka': '#2D4059',
              // 'drkt': '#EEEEEE',
          },
          animation: {
              'spin-slow': 'spin 3s linear infinite',
          },
          keyframes: {
              sizeUp: {
                  '0%': {transform: 'scale(0)', zIndex: '100'},
                  '100%': {transform: 'scale(1)', zIndex: '100'},
              },
              lowPetR: {
                  '100%': {transform: 'translateX(-10%) translateY(-17%) rotate(90deg)'}
              },
              lowPetL: {
                  '100%': {transform: 'translateX(10%) translateY(-17%) rotate(-90deg)'}
              },
              midPetR: {
                  '100%': {transform: 'translateX(-3.75%) translateY(-6.5%) rotate(45deg)'}
              },
              midPetL: {
                  '100%': {transform: 'translateX(3.75%) translateY(-6.5%) rotate(-45deg)'}
              },
              twirl: {
                  'from': {transform: 'rotate(0deg)'},
                  'to': {transform: 'rotate(180deg)'}
              },
              bam: {
                  '0%': {fontSize: '0'},
                  '100%': {fontSize: '2.75vmax'}
              },
              bom: {
                  '0%': {fontSize: '0'},
                  '100%': {fontSize: '1.5vmax'}
              },
              bem: {
                  '0%': {fontSize: '0'},
                  '100%': {fontSize: '2.25vmax'}
              },
              Social: {
                  '0%, 100%': {filter: true},
                  '50%': {filter: false},
              },
              fadIn: {
                  '0%': {opacity: '0'},
                  '100%': {opacity: '1'}
              },
              fadOut: {
                  '0%': {opacity: '1'},
                  '100%': {opacity: '0', zIndex: '-1'}
              },
              cnnt: {
                  '0%': {opacity: '0'},
                  '10%': {opacity: '0'},
                  '20%, 95%': {transform: 'translateX(-10vmax)', opacity: '1'},
                  '97%': {opacity: '0'},
                  '100%': {transform: 'translateX(10vmax)'},
              },
              LslideIn: {
                  '0%': {transform: 'translateX(40vw)', opacity: '0'},
                  '2%': {transform: 'translateX(5vw)', opacity: '1'},
                  '16.67%': {transform: 'translateX(5vw)', opacity: '1'},
                  // '20%': {opacity: '0'},
                  '17.67%': {transform: 'translateX(-40vw)', opacity: '0'},
                  '100%': {opacity: '0'}
              },
              LslideUp: {
                  '0%': {transform: 'translateY(0)'},
                  '100%': {transform: 'translateY(-100%)'}
              }
          },
      },
  },
  plugins: [],
}