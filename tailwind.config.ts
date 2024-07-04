import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#3D405B",
        secondary: "#168582",
        "white-main": "#E7E8EF",
        "primary-light": "#70759F",
        "base-white": "#CBE8E6",
        "neutral": "#9ACCC9",
        "neutral-300": "#83BCB9",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slideUp: {
          "70%": {
            opacity: "0.7",
            transform: "translateY(50px)",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideDown: {
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideNavUp: {
          "100%": {
            transform: "translateY(-112px)",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slideUp: "slideUp 1s 0.2s ease forwards",
        slideDown: "slideDown 1s 0.2s ease forwards",
        slideNavUp: "slideDown 1s 0.2s ease forwards",
      },
      fontFamily: {
        raleway: [`var(--font-raleway)`, "monospace"],
        unica: [`var(--font-unica)`, "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config