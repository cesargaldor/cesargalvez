<template>
  <div class="flex">
    <a
      aria-label="Twitter"
      href="https://twitter.com/cesargd_"
      target="_blank"
      rel="noopener"
      class="p-3 mr-2 rounded-md"
    >
      <TwitterIcon />
    </a>
    <a
      aria-label="Github"
      href="https://github.com/cesargaldor"
      target="_blank"
      rel="noopener"
      class=" p-3 mr-2 rounded-md"
    >
      <GithubIcon />
    </a>
    <a
      aria-label="Email"
      href="mailto:cesargaldor@gmail.com"
      class="p-3 rounded-md"
    >
      <MailIcon />
    </a>
    <!-- <a
      aria-label="Email"
      href="mailto:cesargaldor@gmail.com"
      class="p-3 rounded-md"
    >
      <LinkedinIcon />
    </a> -->
  </div>
</template>

<script>
export default {
  name: "Icons",
  components: {
    TwitterIcon: () => import("@/assets/icons/twitter.svg?inline"),
    GithubIcon: () => import("@/assets/icons/github.svg?inline"),
    MailIcon: () => import("@/assets/icons/mail.svg?inline"),
    LinkedinIcon: () => import("@/assets/icons/linkedin.svg?inline")
  }
};
</script>

<style scoped>
a:hover {
  background: var(--bg-background-secondary);
}
</style>
