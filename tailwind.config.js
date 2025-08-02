/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // Scan all .js and .jsx files inside /src
  ],
  theme: {
    extend: {
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        floatY2: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px #3b82f6, 0 0 20px #3b82f6' },
          '50%': { boxShadow: '0 0 20px #60a5fa, 0 0 30px #60a5fa' },
        },
        glowRed: {
          '0%, 100%': { boxShadow: '0 0 10px #ef4444, 0 0 20px #ef4444' },
          '50%': { boxShadow: '0 0 20px #f87171, 0 0 30px #f87171' },
        },
        glowGreen: {
          '0%, 100%': { boxShadow: '0 0 10px #22c55e, 0 0 20px #22c55e' },
          '50%': { boxShadow: '0 0 20px #4ade80, 0 0 30px #4ade80' },
        },
      },
      animation: {
        floatY: 'floatY 3s ease-in-out infinite',
        floatY2: 'floatY2 3s ease-in-out infinite',
        glow: 'glow 1.5s ease-in-out infinite',
        glowRed: 'glowRed 1.5s ease-in-out infinite',
        glowGreen: 'glowGreen 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

