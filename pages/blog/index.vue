<template>
  <div class="blog-contenedor">
    <h2 class="sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
      Blog
    </h2>
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
  name: "Blog",
  head() {
    return {
      title: "Blog - César Gálvez"
    };
  },
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .sortBy("date", "asc")
      .fetch();

    return {
      articles
      //tags
    };
  }
};
</script>

<style scoped>
h2,
h3 {
  @apply tracking-tight;
}

@media (min-width: 350px) {
  .blog-contenedor {
    min-height: 68vh;
  }
}

@media (min-width: 1280px) {
  .blog-contenedor {
    min-height: 45vh;
  }
}

@media (min-width: 1920px) {
  .blog-contenedor {
    min-height: 63vh;
  }
}
</style>
