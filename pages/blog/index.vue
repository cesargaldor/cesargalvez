<template>
  <div class="blog-contenedor">
    <h2 class="sm:text-4xl lg:text-5xl xl:text-5xl font-bold mb-3">Blog</h2>
    <p class="text-copy-secondary sm:pr-1 lg:pr-2">
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
    <h3 class="sm:text-2xl lg:text-3xl xl:text-3xl font-bold">
      Todos los posts
    </h3>
    <nuxt-link
      :to="`/blog/` + article.slug"
      v-for="article in articles"
      :key="article.title"
    >
      <Post
        :title="article.title"
        :date="article.date"
        :description="article.description"
      />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Blog",
  head() {
    return {
      title: "Blog - César Gálvez",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: `Bienvenido al blog de César Gálvez. En este blog quiero ir escribiendo cosas que me gustaría haber sabido cuando yo las aprendí. Seguro que hay gente que está en la misma situación en la que yo me encontraba y que encuentra útil este contenido.`
        }
      ],
      link: [
        {
          href:
            "https://fonts.googleapis.com/css2?family=Overpass+Mono:wght@400;600&display=swap",
          rel: "stylesheet"
        }
      ]
    };
  },
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
    min-height: 71vh;
  }
}
</style>
