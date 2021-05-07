<template>
  <div class="text-copy-secondary border-t border-gray-gray1">
    <div class="pt-5 pb-5">
      <Spotify />
    </div>
    <div class="flex justify-between items-end text-sm">
      <div class="flex flex-col">
        <nuxt-link class="py-1" to="/">Inicio</nuxt-link>
        <nuxt-link class="py-1" to="/blog">Blog</nuxt-link>
        <nuxt-link class="py-1" to="/sobre-mi">Sobre mí</nuxt-link>
      </div>
      <div>&copy; César Gálvez</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {
    HeartIcon: () => import("@/assets/icons/heart.svg?inline")
  }
};
</script>

<style scoped></style>
