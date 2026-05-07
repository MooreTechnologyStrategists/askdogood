/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — mirrors CSS custom props in index.css
        forest:      "oklch(0.33 0.13 138)",
        terracotta:  "oklch(0.57 0.15 45)",
        sage:        "oklch(0.63 0.10 140)",
        cream:       "oklch(0.98 0.012 82)",
        charcoal:    "oklch(0.14 0.002 0)",
        "warm-gray": "oklch(0.54 0.025 58)",
      },
      fontFamily: {
        sans:  ["Inter", "system-ui", "-apple-system", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        "warm-sm":  "0 1px 3px oklch(0.14 0.002 0 / 0.06), 0 2px 8px oklch(0.14 0.002 0 / 0.04)",
        "warm":     "0 4px 14px oklch(0.33 0.13 138 / 0.12), 0 1px 3px oklch(0.14 0.002 0 / 0.08)",
        "warm-lg":  "0 8px 28px oklch(0.33 0.13 138 / 0.16), 0 2px 6px oklch(0.14 0.002 0 / 0.08)",
        "terra":    "0 4px 14px oklch(0.57 0.15 45 / 0.28)",
      },
    },
  },
  plugins: [],
};
