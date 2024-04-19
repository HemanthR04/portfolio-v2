import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
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
