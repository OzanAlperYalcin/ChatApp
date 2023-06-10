/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00a884',
        secondary: '#25D366',
        third: '#202C33',
        forth: '#111B21'
      },
      backgroundImage: {
        chat: "url('./assets/bg.png')"
      }
    },
  },
  plugins: [],
}

