<template>
  <div class="sm:pt-5 lg:pt-8">
    <h1 class="font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
      {{ article.title }}
    </h1>
    <div class="flex items-center justify-between">
      <div class="flex items-center mt-2 text-sm text-copy-secondary">
        <img
          src="@/assets/img/meuser.jpg"
          class="w-6 rounded-full mr-2"
          alt="yo"
        />
        <span class=" mr-1">César Galvez / </span>
        <span>{{ article.date }}</span>
      </div>
      <div>
        <nuxt-link
          :to="`/blog/categorias/` + tag"
          v-for="tag in article.tags"
          :key="tag"
          class="tag text-xs sm:ml-2 lg:ml-3 xl:ml-3 uppercase bg-background-secondary rounded-md"
        >
          {{ tag }}
        </nuxt-link>
      </div>
    </div>
    <article class="pt-12">
      <nuxt-content :document="article" />
    </article>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  head() {
    return {
      title: this.article.title + " - César Gálvez",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.article.title + " - César Gálvez"
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.article.description
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.article.title + " - César Gálvez"
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.article.description
        },
        // {
        //   hid: 'og:image',
        //   property: 'og:image',
        //   content: `https://res.cloudinary.com/de5xzoviz/image/upload/q_68/${this.doc.image}`,
        // },
        // {
        //   hid: 'og:image:secure_url',
        //   property: 'og:image',
        //   content: `https://res.cloudinary.com/de5xzoviz/image/upload/q_68/${this.doc.image}`,
        // },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: this.article.title
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
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  }
};
</script>

<style scoped>
.tag {
  padding: 0.35rem 0.5rem 0.35rem 0.5rem;
  text-align: center;
}
</style>
