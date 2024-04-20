import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      backgroundColor:{
        "Secondary":"#1C1C1C",
        "whiteD9":"#D9D9D9",
      },
      textColor:{
        "whiteFA":"#FAFAFA",
        "gray666":"#66696B",
      },
      borderColor:{
        "gray666":"#66696B",
      }
    },
  },
  plugins: [],
};
export default config;
