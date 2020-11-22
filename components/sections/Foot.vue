<template>
  <div class="flex justify-between items-center text-copy-secondary">
    <div></div>
    <div class="flex items-center text-sm">
      Hecho con <HeartIcon class="mx-1" /> en
      <a
        class="ml-1 hover:text-copy-modal"
        href="https://www.visitasevilla.es/turismo-de-sevilla"
      >
        Sevilla.
      </a>
    </div>
    <div></div>
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
