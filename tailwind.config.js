/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#2563EB',
        'brand-dark': '#1D4ED8',
        navy: {
          50: '#F0F4FA',
          100: '#E1E8F4',
          200: '#C3D1E5',
          300: '#94AACA',
          400: '#6B84A8',
          500: '#4A6388',
          600: '#344B6B',
          700: '#1E3555',
          800: '#132844',
          900: '#0B1A2F',
          950: '#060E1A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
