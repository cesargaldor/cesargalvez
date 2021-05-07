<template>
  <div>
    <section class="lg:pt-16">
      <span class="text-copy-secondary text-sm xl:text-lg">Hola, me llamo</span>
      <h1 class="sm:text-4xl lg:text-6xl font-bold titular">
        César Gálvez.
      </h1>
      <p class="text-copy-secondary">
        Ingeniero de software apasionado por la
        <span class="underline">tecnología</span> y las
        <span class="underline">motos</span>.
        <br />
        Bienvenido a mi rincón en internet.
      </p>
      <div class="pt-3">
        <Icons />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "newHeader"
};
</script>

<style scoped>
p {
  @apply py-2;
}

@media (min-width: 1920px) {
  .titular {
    font-size: 4.5rem;
  }

  p {
    font-size: 1.2rem;
  }
}
</style>
