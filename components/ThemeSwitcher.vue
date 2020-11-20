<template>
  <span class="text-copy-primary cursor-pointer" @click.prevent="toggleTheme">
    <Light v-if="theme === 'theme-light'" />
    <Dark v-else />
  </span>
</template>

<script>
export default {
  name: "ThemeSwitcher",
  components: {
    Dark: () => import("@/assets/icons/dark.svg?inline"),
    Light: () => import("@/assets/icons/light.svg?inline")
  },
  props: {
    theme: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleTheme() {
      const newTheme =
        this.theme === "theme-light" ? "theme-dark" : "theme-light";
      localStorage.setItem("theme", newTheme);
      this.$emit("themeChanged", newTheme);
    }
  }
};
</script>
