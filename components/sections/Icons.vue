<template>
  <div class="flex">
    <a
      href="https://twitter.com/cesardev_"
      target="_blank"
      rel="noopener"
      class="p-3 mr-2 rounded-md"
    >
      <TwitterIcon />
    </a>
    <a
      href="https://github.com/cesargaldor"
      target="_blank"
      rel="noopener"
      class=" p-3 mr-2 rounded-md"
    >
      <GithubIcon />
    </a>
    <a href="mailto:cesargaldor@gmail.com" class="p-3 rounded-md">
      <MailIcon />
    </a>
  </div>
</template>

<script>
export default {
  name: "Icons",
  components: {
    TwitterIcon: () => import("@/assets/icons/twitter.svg?inline"),
    GithubIcon: () => import("@/assets/icons/github.svg?inline"),
    MailIcon: () => import("@/assets/icons/mail.svg?inline")
  }
};
</script>

<style scoped>
a:hover {
  background: var(--bg-background-secondary);
}
</style>
