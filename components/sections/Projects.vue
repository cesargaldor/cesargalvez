<template>
  <section class="pt-12">
    <h3 class="sm:text-2xl lg:text-3xl font-semibold mb-6">
      Proyectos
    </h3>
    <div
      class="rounded-lg border border-gray-gray1 hover:shadow-xl transition duration-200 ease-in-out"
    >
      <a
        :href="project.url"
        target="_blank"
        rel="noopener"
        v-for="project in projects"
        :key="project.name"
      >
        <div
          class="sm:pr-0 flex px-1 sm:py-4 lg:py-8 xl:py-8 hover:bg-background-secondary transition duration-300 ease-in-out"
        >
          <div class="sm:w-2/12 lg:w-1/12 flex items-center justify-center">
            <BarberIcon
              v-show="project.icon == 'barber'"
              class="sm:w-6 lg:w-8"
            />
            <BurgerIcon
              v-show="project.icon == 'burger'"
              class="sm:w-6 lg:w-8"
            />
            <MovieIcon v-show="project.icon == 'movie'" class="sm:w-6 lg:w-8" />
          </div>
          <div class="sm:w-10/12 lg:w-11/12 sm:pl-1 lg:pl-2 pr-3">
            <h3 class="font-semibold text-md xl:text-lg">{{ project.name }}</h3>
            <p class="text-xs xl:text-sm text-copy-secondary">
              {{ project.description }}
            </p>
          </div>
        </div>
      </a>
    </div>
  </section>
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
          description: `Carta digital para bares y restaurantes. Backend hecho con
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
          Permite al usuario guardar las películas en listas de favoritos, vistas y pendientes.`,
          icon: "movie",
          url: "https://movies-28230.web.app/"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
