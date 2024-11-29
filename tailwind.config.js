/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      sans: ['Roboto','sans-serif'],gunterz: ['Gunterz', 'sans-serif'],gunterzBold:['Gunterz-Bold','sans-serif'],gunterzRegular:['Gunterz-Regular','sans-serif'] // Establecer "MiFuente" como la fuente predeterminada
    }},
  },
  plugins: [],
}
