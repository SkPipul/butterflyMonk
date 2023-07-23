/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        // you can configure the container to be centered
        center: true,
  
        // or have default horizontal padding
        padding: "0 1rem",
  
        // default breakpoints but with 40px removed
        screens: {
          sm: "590px",
          md: "728px",
          lg: "1030px",
          xl: "1220px",
          xxl: "1440px",
        },
      },
    },
  },
  plugins: [require('daisyui')],
}