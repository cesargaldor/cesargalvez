<template>
  <div class="mt-10">
    <h2 class="text-2xl font-bold mb-6">Proyectos</h2>
    <a
      :href="project.url"
      target="_blank"
      rel="noopener"
      v-for="project in projects"
      :key="project.name"
    >
      <div
        class="mb-5 sm:pr-0 lg:mr-4 flex border border-gray-gray1 px-1 py-4 transition duration-500 ease-in-out hover:shadow-xl"
      >
        <div class="sm:w-2/12 lg:w-1/12 flex items-center justify-center">
          <BarberIcon
            v-show="project.icon == 'barber'"
            class="sm:w-8 lg:w-10"
          />
          <BurgerIcon
            v-show="project.icon == 'burger'"
            class="sm:w-8 lg:w-10"
          />
          <MovieIcon v-show="project.icon == 'movie'" class="sm:w-8 lg:w-10" />
        </div>
        <div class="sm:w-10/12 lg:w-11/12 sm:pl-1 lg:pl-2 pr-3">
          <h3 class="font-semibold text-lg mb-1">{{ project.name }}</h3>
          <p class="text-sm text-copy-secondary">
            {{ project.description }}
          </p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Projects",
  components: {
    BarberIcon: () => import("@/assets/icons/barber.svg?inline"),
    BurgerIcon: () => import("@/assets/icons/burger.svg?inline"),
    MovieIcon: () => import("@/assets/icons/movie.svg?inline")
  },
  data() {
    return {
      projects: [
        {
          name: "Menu Qr Simple",
          description: `Carta digital para bares y restaurantes. Tiene un backend hecho con
            Express y MySQL y el frontend se despliega sobre Nuxt.`,
          icon: "burger",
          url: "https://menuqrsimple.vercel.app/"
        },
        {
          name: "Peluqueriapp",
          description: `Sistema de citas para peluquerías hecho con Vue usando el ecosistema de 
          Google Firebase (auth, firestore, hosting).`,
          icon: "barber",
          url: "https://apppeluqueria-8.web.app/"
        },
        {
          name: "Peliculapps",
          description: `Biblioteca de películas hecha con Vue y usando también el ecosistema de Firebase. 
          Recoge la información de la API de TMDB y permite al usuario guardar las películas 
          en listas de favoritos, vistas y pendientes`,
          icon: "movie",
          url: "https://movies-28230.web.app/"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
