//import meta from "./constants/meta.js";
export default {
  // server: {
  //   port: 3000, // default: 3000
  //   host: "0.0.0.0" // default: localhost
  // },
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: "es"
    },
    title: "César Gálvez",
    meta: [
      { charset: "utf-8" },
      {
        hid: "description",
        name: "description",
        content:
          "Ingeniero de software apasionado por la tecnología y las motos."
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#54a0ff" },
      {
        name: "google-site-verification",
        content: "59MbMgpeZP_zZQwamSSJiNALFwOpBo_vsAY9dr8VMGU"
      },
      {
        hid: "author",
        author: "César Gálvez"
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: "@cesargd_"
      },
      {
        hid: "twitter:domain",
        name: "twitter:domain",
        content: "cesargalvez.com"
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@cesargd_"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://cesargalvez.com"
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "og:locale",
        property: "og:locale",
        content: "es_ES"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "César Gálvez"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Ingeniero de software apasionado por la tecnología y las motos."
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "cesargalvez.com"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: ""
      },
      {
        hid: "og:image:secure_url",
        property: "og:image",
        content: ""
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "César Gálvez"
      }
      // {
      //   hid: "og:image:type",
      //   property: "og:image:type",
      //   content: "image/png"
      // }
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
      }
    ]
  },

  generate: {
    async routes() {
      const { $content } = require("@nuxt/content");
      const dynamicRoutes = await $content("articles")
        .only(["slug"])
        .fetch();
      return dynamicRoutes.map(myRoute =>
        myRoute.slug === "/index" ? "/" : `/blog/${myRoute.slug}`
      );
    }
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
