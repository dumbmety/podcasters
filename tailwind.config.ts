import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      brand: {
        DEFAULT: "#F47220",
        hover: "#E9610C",
      },
    },
  },
  plugins: [],
};
export default config;
