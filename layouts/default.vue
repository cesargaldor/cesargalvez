<template>
  <div
    class="contenedor sm:w-full md:w-full lg:w-full xl:w-full sm:px-6 md:px-32 lg:px-48 bg-background-primary text-copy-primary transicion"
    :class="theme"
  >
    <div>
      <nav class="flex items-center justify-between py-8">
        <div>
          <!-- <nuxt-link to="/" class="font-semibold"
            >cesar.<span class="text-copy-modal font-semibold"
              >galvez</span
            ></nuxt-link
          > -->
        </div>
        <div class="flex items-center">
          <div class="nav-items">
            <nuxt-link class="px-1" to="/blog">Blog</nuxt-link>
          </div>
          <div class="nav-items">
            <ThemeSwitcher :theme="theme" @themeChanged="updateTheme" />
          </div>
        </div>
      </nav>
    </div>
    <Nuxt />
    <div class="sm:py-8 lg:py-16">
      <Foot />
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      theme: "theme-light"
    };
  },
  methods: {
    updateTheme(theme) {
      this.theme = theme;
    }
  },
  mounted() {
    this.theme = localStorage.getItem("theme") || "theme-light";
  }
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  scroll-behavior: smooth;
}

*::selection {
  color: #fff;
  background: var(--text-copy-modal);
}

@media (min-width: 1920px) {
  .contenedor {
    padding-left: 30rem;
    padding-right: 30rem;
  }
}

.transicion {
  transition: all 0.2s ease-in;
}

::-webkit-scrollbar {
  display: none;
}

.nav-items {
  @apply pl-4;
}
</style>
