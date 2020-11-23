module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1280px",
      xl: "1920px",
      "2xl": "2500px"
    },
    colors: {
      black: "#000",
      white: "#fff",
      transparent: "transparent",
      blue: {
        default: "#74b9ff",
        dark: "#0984e3"
      },
      gray: {
        gray1: "#c8d6e5",
        gray2: "#8395a7",
        gray3: "#56616d"
      },
      background: {
        primary: "var(--bg-background-primary)",
        secondary: "var(--bg-background-secondary)",
        modal: "var(--bg-background-modal)"
      },

      copy: {
        primary: "var(--text-copy-primary)",
        secondary: "var(--text-copy-secondary)",
        terciary: "var(--text-copy-terciary)",
        modal: "var(--text-copy-modal)",
        input: "var(--text-copy-input)"
      }
    }
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  },
  variants: {},
  plugins: []
};
