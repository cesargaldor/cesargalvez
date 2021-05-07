<template>
  <div>
    <h3
      class="sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6 sm:pt-6 lg:pt-16"
    >
      Últimos artículos
    </h3>
    <div class="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 relative">
      <nuxt-link
        :to="`/blog/` + article.slug"
        v-for="article in articles"
        :key="article.title"
      >
        <Post :title="article.title" :tags="article.tags" :img="article.img" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LatestPost",
  props: ["articles"]
};
</script>

<style scoped></style>
