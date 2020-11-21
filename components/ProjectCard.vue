<template>
  <div>
    <a :href="url" target="_blank" rel="noopener">
      <div
        class="mb-5 flex border border-gray-gray1 px-1 py-4 transition duration-500 ease-in-out hover:shadow-xl"
      >
        <div class="w-1/12 flex items-center justify-center">
          <div :html="require(icon)" alt="" />
        </div>
        <div class="w-11/12 pr-2">
          <h3 class="font-semibold text-lg mb-1">{{ name }}</h3>
          <p class="text-sm">
            {{ description }}
          </p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: ["name", "description", "icon", "url"]
};
</script>

<style scoped></style>
