/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E43D12',
        'accent-pink': '#D6536D',
        'accent-light': '#FFA2B6',
        'accent-yellow': '#FCCD04',
        'bg-offwhite': '#EBE9E1',
      },
      fontFamily: {
        modern: ['Montserrat', 'ui-sans-serif', 'sans-serif'],
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [],
} 