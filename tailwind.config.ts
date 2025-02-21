import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bdBoostedBlue: "#044ED7",
        bdWhiteWarm: "#F8F4F1",
        bdBoostedOrange: "#FF6E00",
        bdWarmGray: "#DAD7D6",
        bdBrightBlue: "#1D74FF",
        bdDeepBlue: "#060A3D",
        bdUltraViolet: "#9199D8",
        bdCometLight: "#45C5E9",
        bdNebulaDark: "#009C7F",
        bdNebulaNebula: "#00AF95",
        bdNebulaLight: "#44BDAA",
        bdInfraRedDark: "#E43B46",
        bdInfraRed: "#E85050",
        bdInfraRedLight: "#EA786C",
        bdEclipseDark: "#FF9D00",
        bdEclipse: "#FFB500",
        bdEclipseLight: "#FFC764",
      },
    },
  },
  plugins: [],
};
export default config;
