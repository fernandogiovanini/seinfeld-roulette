import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{ 
      'ultramarine_blue': '#5371ff', 
      'cyber_yellow': '#FFD500', 
      'red': '#F90006', 
      'red_devil': '#7E0515', 
      'black': '#000000',
      'white': '#FFFFFF'
    },
    extend: {

    },
  },
  plugins: [],
};
export default config;
