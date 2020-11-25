<template>
  <div
    class="contenedor sm:w-full lg:w-full xl:w-full sm:px-5 lg:px-56 bg-background-primary text-copy-primary transicion"
    :class="theme"
  >
    <div>
      <nav class="flex items-center justify-between py-10">
        <div>
          <nuxt-link to="/" class="font-semibold"
            >cesar.<span class="text-copy-modal font-semibold"
              >galvez</span
            ></nuxt-link
          >
        </div>
        <div class="flex items-center">
          <div class="nav-items">
            <nuxt-link to="/blog">blog</nuxt-link>
          </div>
          <div class="nav-items">
            <ThemeSwitcher :theme="theme" @themeChanged="updateTheme" />
          </div>
        </div>
      </nav>
    </div>
    <Nuxt />
    <div class="pt-20 pb-6">
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
}

*::selection {
  color: #fff;
  background: var(--text-copy-modal);
}

@media (min-width: 1920px) {
  .contenedor {
    padding-left: 25rem;
    padding-right: 25rem;
  }
}

@media (min-width: 2500px) {
  .contenedor {
    padding-left: 45rem;
    padding-right: 45rem;
    min-height: 100vh;
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
