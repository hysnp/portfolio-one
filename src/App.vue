<template>
  <main class="h-full dark:bg-black bg-white">
    <SectionOneVue />
    <SectionTwoVue />
  </main>
</template>

<script setup>
// vue3 parts
import SectionOneVue from "./sections/SectionOne.vue";
import SectionTwoVue from "./sections/SectionTwo.vue";
</script>

<style lang="scss">
::selection {
  color: ghostwhite;
  background: #c77528;
}
</style>
