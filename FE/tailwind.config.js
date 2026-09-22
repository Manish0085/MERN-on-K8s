import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui:{
    themes:["synthwave"],//forest,light,dark,coffee,cyberpunk,dracula,emerald,lofi,pastel,synthwave,valentine,winter,wireframe
  },
}