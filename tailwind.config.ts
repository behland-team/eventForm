import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lalezar: ["var(--font-lalezar)", "sans-serif"],
        sans: ["var(--font-lalezar)", "sans-serif"], // default font برای تمام سایت
      },
      colors: {
        primary: {
          50: "#FFF9F3",
          100: "#FEECD8",
          200: "#FDD5A3",
          300: "#FCBE6E",
          400: "#FAA742",
          500: "#F89009",
          600: "#CC6D14",
          700: "#BD5300",
          800: "#A04400",
          900: "#7D3400",
        },
        neutral: {
          50: "#F9F9F9",
          100: "#EEEEEE",
          200: "#E0E0E0",
          300: "#CCCCCC",
          400: "#999999",
          500: "#989898",
          600: "#666666",
          700: "#4A4A4A",
          800: "#292929",
          900: "#171717",
        },
        background: {
          main: "#FFF6EC",
          card: "#FEECD8",
        },
        error: {
          main: "#B93E2E",
          light: "#EF4444",
        }
      },
      boxShadow: {
        'custom': '0px 0px 7px 0px #00000040',
        'button': '0px 4px 0px 0px #CC6D14',
        'button-hover': '0px 2px 0px 0px #CC6D14',
      },
      spacing: {
        '18': '4.5rem',
        '38': '9.5rem',
      },
      borderColor: {
        'custom': '#FFFFFF3D',
      }
    },
  },
  plugins: [],
};

export default config;
