/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        bases: "2.5rem"
      },
      borderWidth: {
        '40': '25px',
        '20': '15px',
        '10': '10px',

      },
      height: {
        '500': '450px',
        '100': '180px',
        '200': '280px',
        '300': '360px',
        '350': '380px',
        '400': '400px',
        // '400': '450px',
      },
      width: {
        '500': '800px',
        '200': '300px',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { backgroundColor: '#ff00ff' },  // Pink color
          '50%': { backgroundColor: '#ff0000' },      // Red color
        },
      },
      animation: {
        pulse: 'pulse 2s infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


// module.exports = {
//   theme: {
//     extend: {
//       borderWidth: {
//         '40': '40px',
//       }
//     }
//   }
// }

