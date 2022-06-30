<template>
  <section id="section-three">
    <h1 class="p-5 text-eva lg:text-5vw text-4vh text-center">Портфолио.</h1>
    <div class="flex">
      <h2
        class="w-max text-eva lg:text-8vw text-5vh text-neutral-800 vertical-rl"
      >
        2019 - 2022
      </h2>
      <div class="router flex flex-col w-full">
        <nav class="flex flex-wrap p-2">
          <router-link
            v-for="item in sitesLinks"
            :key="item.id"
            :to="{ name: item.to }"
            class="m-2 px-5 py-2 text-raleway text-center lg:text-2vw text-2vh hover:dark:bg-orange-500 hover:bg-orange-500 dark:bg-neutral-800 bg-neutral-200 duration-200 rounded-full"
          >
            {{ item.name }}
          </router-link>
        </nav>
        <div
          class="router-base h-full p-10 bg-gradient-to-t dark:from-neutral-900 dark:to-black from-neutral-200 to-white rounded-b-75px"
        >
          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/*
Список сайтов для портфолио - Первый, достопримичательности Барнаула, 
Самолёты ВОВ, кофейня, окна, незаконченные проекты на вью, вебпак, 
секретный сайт
*/


const sitesLinks = [
  {
    id: 1,
    name: "Первый сайт",
    to: "siteOne",
  },
  {
    id: 2,
    name: "Второй сайт",
    to: "siteTwo",
  },
];
</script>

<style lang="scss" scoped></style>
