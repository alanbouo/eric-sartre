/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A676A',
          dark: '#3A5456',
          light: '#5A7A7D',
        },
        eco: {
          DEFAULT: '#6B8E23',
          light: '#8FBC8F',
          dark: '#556B2F',
        },
        background: {
          DEFAULT: '#F5F5F5',
          alt: '#FFFFFF',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
