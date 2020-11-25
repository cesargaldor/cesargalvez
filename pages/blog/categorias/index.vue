<template>
  <div class="blog-contenedor mb-5">
    <h2 class="sm:text-4xl lg:text-5xl xl:text-5xl font-bold mb-3">Blog</h2>
    <p class="text-copy-secondary sm:pr-1 lg:pr-2 text-justify">
      En este blog quiero ir escribiendo cosas que me gustaría haber sabido
      cuando yo las aprendí. Seguro que hay gente que está en la misma situación
      en la que yo me encontraba y que encuentra útil este contenido.
    </p>
    <div class="mt-6 sm:mb-10 lg:mb-12">
      <!-- <input
        v-model="searchQuery"
        autocomplete="off"
        placeholder="Busca artículos"
        class="w-full px-2 py-3 truncate leading-5 text-sm placeholder-copy-input text-copy-input rounded-md focus:outline-none bg-background-secondary"
      /> -->
    </div>
    <div>
      <h3
        class="sm:text-2xl lg:text-3xl xl:text-3xl font-bold  sm:mb-0 lg:-mb-2"
      >
        Todas las categorías
      </h3>
    </div>
    <ul class="mt-8">
      <li v-for="tag in tags" :key="tag.name" class="pb-2 text-lg">
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
    min-height: 65vh;
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
