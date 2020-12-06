<template>
  <div>
    <section>
      <div class="pt-2 w-full flex sm:flex-col lg:flex-row items-center">
        <div
          class="sm:w-full lg:w-2/5 xl:w-2/5 lg:pt-6 flex flex-col justify-center items-center"
        >
          <picture>
            <img
              class="sm:w-40 lg:w-56 xl:w-56 rounded-full"
              src="@/assets/img/meuser.jpg"
              alt="profile-photo"
            />
          </picture>
          <div class="sm:pt-2 lg:pt-6">
            <Icons />
          </div>
        </div>
        <div class="sm:w-full lg:w-3/5 xl:w-3/5 pr-4 sm:pt-6">
          <h3 class="sm:text-xl lg:text-2xl xl:text-4xl font-bold mb-3 ">
            Hola, soy César.
          </h3>
          <div class="text-copy-secondary">
            <p>
              Soy de Sevilla y actualmente estoy terminando Ingeniería de
              Software.
            </p>
            <p>
              A lo largo de la carrera he ido descubriendo que lo que de verdad
              me gusta es el desarrollo web.
            </p>
            <p>
              Cuando tengo tiempo voy haciendo pequeños proyectos personales
              para continuar aprendiendo.
            </p>
            <p>
              A parte de la tecnología, también disfruto:
            </p>
            <ul class="mt-1">
              <li class="py-1">- Montar en moto.</li>
              <li class="py-1">- Jugar al pádel.</li>
              <li class="py-1">- Escuchar R&B y hacer playlist de Spotify.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "newHeader"
};
</script>

<style>
section {
  /* height: 83.2vh; */
  height: calc(100vh - 6.5rem);
}

p {
  @apply py-2;
}
</style>
