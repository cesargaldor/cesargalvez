<template>
  <div class="container">
    <h2 class="text-5xl font-bold mb-3">Blog</h2>
    <p class="text-copy-secondary pr-2">
      En este blog quiero ir escribiendo cosas que me gustaría haber sabido
      cuando yo las aprendí. Seguro que hay gente que está en la misma situación
      en la que yo me encontraba y que encuentra útil este contenido.
    </p>
    <div class="mt-6 mb-16">
      <input
        v-model="searchQuery"
        autocomplete="off"
        placeholder="Busca artículos"
        class="w-full px-2 py-3 truncate leading-5 text-sm placeholder-copy-input text-copy-input rounded-md focus:outline-none bg-background-secondary"
      />
    </div>
    <h3 class="text-3xl font-bold mb-2">Todos los posts</h3>
    <nuxt-link
      :to="`/blog/` + article.slug"
      v-for="article in articles"
      :key="article.title"
    >
      <div class="flex items-center justify-between mb-2 mt-10">
        <div class="w-11/12">
          <h4 class="text-xl font-semibold">{{ article.title }}</h4>
        </div>
        <div class="w-2/12">{{ article.date }}</div>
      </div>
      <p class="text-sm pr-6 text-copy-secondary">{{ article.description }}</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      searchQuery: ""
      //articles: articles
    };
  },
  async asyncData({ $content, params, $this }) {
    const articles = await $content("articles", params.slug)
      .sortBy("createdAt", "desc")
      .fetch();

    // const tags = await $content('tags', params.slug)
    //   .only(['name', 'description', 'img', 'slug'])
    //   .sortBy('createdAt', 'asc')
    //   .fetch()
    return {
      articles
      //tags
    };
  }
};
</script>

<style scoped>
@media (min-width: 1920px) {
  .container {
    min-height: 74.2vh;
  }
}
</style>
