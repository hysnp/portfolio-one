<template>
  <main class="h-full dark:bg-black bg-white duration-200">
    <SectionOneVue />
  </main>
</template>

<script setup>
// vue3 parts
import SectionOneVue from "./sections/SectionOne.vue";
</script>

<style lang="scss">
::selection {
  color: ghostwhite;
  background: #c77528;
}
</style>
