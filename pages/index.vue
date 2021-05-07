<template>
  <div>
    <NewHeader />
    <LatestPost :articles="articles" />
    <Projects />
  </div>
</template>

<script>
export default {
  name: "Index",
  head() {
    return {
      title: "César Gálvez"
    };
  },
  data() {
    return {};
  },
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .sortBy("date", "asc")
      .limit(2)
      .fetch();
    return {
      articles
    };
  }
};
</script>

<style scoped></style>
