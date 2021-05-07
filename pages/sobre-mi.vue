<template>
  <div class="sm:pb-6 lg:pb-6 xl:pb-56">
    <h2 class="sm:text-4xl lg:text-5xl xl:text-5xl font-bold mb-3 ">
      Sobre mí
    </h2>
    <div class="text-copy-secondary sm:pr-1">
      <p class="">
        Hola, soy César Gálvez.
      </p>
      <br />
      <p>
        Por supuesto, el objetivo de la mayoría de estos proyectos no eran los
        usuarios que pudieran usarlos, si no el ir aprendendiendo y
        profundizando en las tecnologías que usaba.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  head() {
    return {
      title: "Sobre mí - César Gálvez",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Estos son unos cuantos proyectos que he ido realizando en mi tiempo libre con el objetivo de seguir aprendiendo."
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "Proyectos - César Gálvez"
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Estos son unos cuantos proyectos que he ido realizando en mi tiempo libre con el objetivo de seguir aprendiendo."
        }
      ]
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
