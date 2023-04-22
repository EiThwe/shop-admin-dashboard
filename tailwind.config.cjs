/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        shippori: ["Shippori Mincho B1", "serif"],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      
  },
  plugins: [],
}
}