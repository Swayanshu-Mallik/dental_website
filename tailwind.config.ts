import type { Config } from "tailwindcss";
import { DEFAULT_CIPHERS } from "tls";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
darkMode: "class",
  theme: {
    extend: {
      backgroundColor:{
        "gradient-radial":
        "radial-gardient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var (--tw-gradient-stops))",
      },
    colors: {
      primary: "#20B2AA", 
      dark: "#11111",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem"
      }
    }
  },
},
  plugins: [],
} satisfies Config;
