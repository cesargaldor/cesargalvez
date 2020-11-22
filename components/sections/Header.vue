<template>
  <div class="sm:mt-4 lg:mt-8 sm:mb-12 lg:mb-32">
    <picture>
      <img
        class="sm:w-24 lg:w-40 xl:w-48 rounded-full"
        src="@/assets/img/meuser.jpg"
        alt="profile-photo"
      />
    </picture>
    <div class="mb-4 mt-4 text-lg">
      <h1 class="sm:text-4xl lg:text-6xl font-bold sm:-mb-2 lg:-mb-4">
        Hola, soy César<span class="text-copy-modal">.</span>
      </h1>
      <span class="text-copy-modal">@cesardev_</span>
    </div>
    <p class="text-copy-secondary sm:text-base lg:text-xl">
      Desarrollador frontend al que le encanta montar en moto. Bienvenido a mi
      rincón en internet.
    </p>
    <div class="mt-5">
      <Icons />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped></style>
