import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F4F5F7",
        foreground: "var(--foreground)",
        black: "#1D1D1B",
        credit: "#C12D30",
        debit: "#2DC137",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        instrumentSans: ["var(--font-instrumentsans)"],
      },
    },
  },
  plugins: [],
};
export default config;
