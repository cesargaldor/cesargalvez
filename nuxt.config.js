import meta from "./constants/meta.js";
export default {
  server: {
    port: 3000, // default: 3000
    host: "0.0.0.0" // default: localhost
  },
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: "es"
    },
    title: "César Gálvez",
    meta: meta,
    link: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/svg"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/gtm",
    "@nuxtjs/sitemap"
  ],

  /*
   ** Sitemap Configuration
   */
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://cesargalvez.com",
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    routes: [
      "/",
      "/sobre-mi",
      "/blog",
      "/blog/como-anadir-un-dominio-a-vercel",
      "/blog/configurar-firestore-en-vue",
      "/blog/categorias",
      "/blog/categorias/firebase",
      "/blog/categorias/vue",
      "/blog/categorias/web"
    ].map(route => ({
      url: route,
      changefreq: "weekly",
      priority: 1,
      lastmodISO: new Date().toISOString().split("T")[0]
    }))
  },

  gtm: {
    id: process.env.NUXT_ENV_GA_ID,
    enabled: true,
    debug: false,
    layer: "dataLayer",
    variables: {},
    pageTracking: true,
    pageViewEventName: "nuxtRoute",
    autoInit: true,
    respectDoNotTrack: true,
    scriptId: "gtm-script",
    scriptDefer: false,
    scriptURL: "https://www.googletagmanager.com/gtag/js",
    noscript: true,
    noscriptId: "gtm-noscript",
    noscriptURL: "https://www.googletagmanager.com/ns.html"
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
