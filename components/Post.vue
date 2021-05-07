<template>
  <div>
    <div class="card text-white relative">
      <div
        class="img-holder pt-5 pl-5 w-full h-full bg-cover bg-center rounded-md"
        :style="{ 'background-image': 'url(' + img + ')' }"
      >
        <div class="mb-3">
          <span
            class="tag bg-blue-dark mr-2 rounded px-2 py-1 uppercase text-xs"
            v-for="tag in tags"
            :key="tag"
            >{{ tag }}</span
          >
        </div>
        <div class="pr-32">
          <h2 class="font-bold sm:text-xl lg:text-2xl xl:text-2xl ">
            {{ title }}
          </h2>
        </div>
        <div
          class="absolute bottom-0 right-0 pb-5 pr-5 flex justify-end w-full"
        >
          <span class="uppercase text-xs">Leer más...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["title", "tags", "img"]
};
</script>

<style scoped>
@media (min-width: 300px) {
  .card {
    height: 26vh;
  }
  .tag {
    font-size: 0.6rem;
  }
}

@media (min-width: 1280px) {
  .card {
    height: 35vh;
  }
}

@media (min-width: 1920px) {
  .card {
    height: 28vh;
  }
}

.img-holder {
  transition: all 0.5s;
}

.img-holder:hover {
  transform: scale(1.02);
}
</style>
