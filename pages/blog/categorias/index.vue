<template>
  <div class="blog-contenedor">
    <h2 class="sm:text-4xl lg:text-5xl xl:text-5xl font-bold mb-3 ">
      Todas las categorías del blog
    </h2>
    <ul class="mt-8">
      <li
        v-for="tag in tags"
        :key="tag.name"
        class="pb-2 lg:text-base xl:text-2xl"
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
  async asyncData({ $content, params }) {
    const tags = await $content("tags", params.slug)
      .only(["name"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
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
    min-height: 45vh;
  }
}

@media (min-width: 1920px) {
  .blog-contenedor {
    min-height: 63vh;
  }
}
</style>
