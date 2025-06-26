/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Di sini kita akan menambahkan warna kustom untuk desain baru
      colors: {
        'dark-navy': '#0a192f',
        'light-navy': '#112240',
        'slate': '#8892b0',
        'brand-blue': '#64ffda',
      },
    },
  },
  plugins: [],
};