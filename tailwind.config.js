/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        beb: "Bebas Neue , sans-serif",
        mont: "Montserrat , sans-serif",
        
      },
      backgroundImage: {
        
      }
    },
  },
  plugins: [require("daisyui")],
};
