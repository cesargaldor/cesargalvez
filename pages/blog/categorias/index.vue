<template>
  <div class="blog-contenedor h-screen">
    <h2 class="sm:text-4xl lg:text-5xl xl:text-5xl font-bold mb-3 ">Blog</h2>
    <div>
      <h3
        class="sm:text-2xl lg:text-3xl xl:text-3xl font-bold sm:-mb-4 lg:-mb-3"
      >
        Todas las categorías
      </h3>
    </div>
    <ul class="mt-8">
      <li
        v-for="tag in tags"
        :key="tag.name"
        class="pb-2 lg:text-base xl:text-lg"
      >
        <nuxt-link :to="`/blog/categorias/` + tag.name">
          - {{ tag.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tags",
  head() {
    return {
      title: "Categorías - César Gálvez"
    };
  },
  data() {
    return {
      searchQuery: ""
      //articles: articles
    };
  },
  async asyncData({ $content, params }) {
    const tags = await $content("tags", params.slug)
      .only(["name"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      //articles
      tags
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
    min-height: 58vh;
  }
}

@media (min-width: 1920px) {
  .blog-contenedor {
    min-height: 72.9vh;
  }
}
</style>
