/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030712',
          900: '#080d1a',
          850: '#0c1326',
          800: '#0f172a',
          700: '#1e293b',
        },
        brand: {
          blue: '#2563eb',
          cyan: '#06b6d4',
          indigo: '#6366f1',
          purple: '#8b5cf6',
          violet: '#7c3aed'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'float-reverse 9s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(25px) rotate(180deg)' },
        }
      }
    },
  },
  plugins: [],
}

