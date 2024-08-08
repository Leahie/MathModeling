import { Ysabeau } from "next/font/google";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        barlow: ['var(--font-barlow)'],
        ysabeau: ['var(--font-ysabeau)'],
        roboto: ['var(--font-roboto)']
      },
      colors: {
        "dark-color": "var(--dark)",
        "white-color": "var(--white)",
        "pale-color": "var(--pale)",
        "light-color": "var(--light)",
        "med-color": "var(--med)",
        "black-color": "var(--black)",
        "normal-text" : "var(--text-size)" 
      },
      
      
    },
    
  },
  plugins: [],
}