<template>
  <div class="sm:pb-6 lg:pb-6 xl:pb-40">
    <h2 class="sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
      Sobre mí
    </h2>
    <div class="text-copy-secondary sm:pr-1">
      <div>
        <img
          class="w-64 rounded-full"
          src="https://res.cloudinary.com/dt0zd5vvj/image/upload/v1607286216/meuser_qbwwut.jpg"
          alt="yo"
        />
      </div>
      <p class="mt-6">
        Hola, soy César Gálvez.
      </p>
      <p></p>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  head() {
    return {
      title: "Sobre mí - César Gálvez"
    };
  }
};
</script>

<style>
h2,
h3 {
  @apply tracking-tight;
}
</style>
