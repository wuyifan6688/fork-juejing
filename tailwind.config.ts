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
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        //todo bug
        flowWater:
          "flowWater 1.2s ease-in-out infinite",
      },
      keyframes: {
        flowWater: {
          "0%": {
            "background-position": "-200px 0",
          },
          "100%": {
            "background-position": "200px 0", // 假设这是你想要的结束位置
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
