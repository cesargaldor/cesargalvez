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
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.article.description
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

<style scoped></style>
