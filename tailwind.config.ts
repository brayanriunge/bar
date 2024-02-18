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
        homeimage: "url('/dashboard.jpg')",
      },
      colors: {
        "olive-green": "#556B2F",
        "dark-chocolate": "#3E2723",
      },
    },
    // backgroundImage: () => ({
    //   homeimage": "url('/dashboard.jpg')",
    // }),
  },
  plugins: [],
};
export default config;
