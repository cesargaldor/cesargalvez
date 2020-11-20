<template>
  <div
    class="w-full px-40 bg-background-primary text-copy-primary"
    :class="theme"
  >
    <div>
      <nav class="flex items-center justify-between py-6">
        <div>
          <nuxt-link to="/">cesar.galvez</nuxt-link>
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
  </div>
</template>

<script>
export default {
  name: "Default Layout",
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
}

::-webkit-scrollbar {
  display: none;
}

.nav-items {
  @apply pl-4;
}
</style>
