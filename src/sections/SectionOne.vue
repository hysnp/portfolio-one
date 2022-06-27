<template>
  <section>
    <ThemeSwitcherVue />
    <div class="bg-section-one grid place-content-center h-screen lg:w-3/4 w-full px-10">
      <h1 class="text-eva lg:text-6vw text-6vh lg:text-left text-center">
        Здравствуйте, меня зовут <span class="text-orange-500">Михаил</span>.
      </h1>
      <p class="text-raleway lg:text-2vw text-2vh lg:text-left text-center">И я - FrontEnd разработчик.</p>
    </div>
  </section>
</template>

<script setup>
import ThemeSwitcherVue from '../components/ThemeSwitcher.vue';
</script>

<style lang="scss" scoped>
.bg-section-one {
  background: linear-gradient(360deg, #171717 0%, #000000 100%);
  border-radius: 0px 0px 75px 75px;
}

@media (min-width: 1024px) {
  .bg-section-one {
    background: linear-gradient(270deg, #171717 0%, #000000 100%);
    border-radius: 0px 75px 75px 0px;
  }
}
</style>
