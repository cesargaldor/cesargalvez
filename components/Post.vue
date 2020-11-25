<template>
  <div class="mb-6">
    <div
      class="w-full sm:flex sm:flex-col lg:flex lg:flex-row xl:flex xl:flex-row lg:items-center xl:items-center lg:justify-between xl:justify-between mb-2 sm:mt-3 lg:mt-8 xl:mt-10"
    >
      <div class="sm:w-full lg:w-12/12 xl:w-11/12">
        <h4 class="sm:text-lg lg:text-lg xl:text-xl font-semibold">
          {{ title }}
        </h4>
      </div>
      <div
        class="sm:w-full sm:text-sm text-copy-secondary sm:mb-1 lg:mb-0 xl:mb-0 lg:w-2/12 lg:text-right xl:w-2/12"
      >
        {{ date }}
      </div>
    </div>
    <p
      class="sm:text-sm lg:text-sm xl:text-base lg:pr-6 xl:pr-8 text-copy-secondary"
    >
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["title", "date", "description"]
};
</script>

<style scoped></style>
