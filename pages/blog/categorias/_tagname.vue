<template>
  <div class="blog-contenedor">
    <h2 class="sm:text-4xl lg:text-5xl xl:text-5xl font-bold mb-3">
      Estos son todos los posts de: {{ tag.name }}
    </h2>
    <div class="mt-6 sm:mb-10 lg:mb-12">
      <!-- <input
        v-model="searchQuery"
        autocomplete="off"
        placeholder="Busca artículos"
        class="w-full px-2 py-3 truncate leading-5 text-sm placeholder-copy-input text-copy-input rounded-md focus:outline-none bg-background-secondary"
      /> -->
    </div>
    <h3 class="sm:text-2xl lg:text-3xl xl:text-3xl font-bold"></h3>
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
      title: `Posts sobre ${this.tag.name} - César Gálvez`
    };
  },

  async asyncData({ $content, params }) {
    const tags = await $content("tags")
      .where({ name: { $contains: params.tagname } })
      .limit(1)
      .fetch();
    const tag = tags.length > 0 ? tags[0] : {};
    const articles = await $content("articles", params.slug)
      .where({ tags: { $contains: tag.name } })
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      articles,
      tag
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
