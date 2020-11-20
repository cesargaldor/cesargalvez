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
      xl: "1920px"
    },
    colors: {
      black: "#000",
      white: "#fff",
      transparent: "transparent",

      background: {
        primary: "var(--bg-background-primary)",
        secondary: "var(--bg-background-secondary)",
        modal: "var(--bg-background-modal)"
      },

      copy: {
        primary: "var(--text-copy-primary)",
        secondary: "var(--text-copy-secondary)",
        modal: "var(--text-copy-modal)"
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
