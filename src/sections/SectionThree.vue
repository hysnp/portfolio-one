<template>
  <section id="section-three">
    <h1 class="p-5 text-eva lg:text-5vw text-4vh text-center text-orange-500">
      Портфолио.
    </h1>
    <div class="flex lg:flex-row flex-col h-full">
      <h2
        id="portfolio-years"
        class="h-full text-eva text-center lg:text-8vw text-5vh dark:text-neutral-800 text-neutral-300 lg:vertical-rl z-10"
      >
        2019 - 2022
      </h2>
      <div class="router w-full">
        <nav class="flex flex-wrap justify-around p-2">
          <router-link
            v-for="item in sitesLinks"
            :key="item.id"
            :to="{ name: item.to }"
            class="m-2 px-5 py-2 text-raleway text-center lg:text-3/2vw text-2vh hover:dark:bg-orange-500 hover:bg-orange-500 dark:bg-neutral-800 bg-neutral-200 duration-200 rounded-full z-20"
          >
            {{ item.name }}
          </router-link>
        </nav>
        <div
          class="router-base lg:p-10 p-5 bg-gradient-to-t dark:from-neutral-900 dark:to-black from-neutral-200 to-white rounded-b-75px z-20"
        >
          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const sitesLinks = [
  {
    id: 1,
    name: "Первый сайт",
    to: "siteOne",
  },
  {
    id: 2,
    name: "Достопримечательности Барнаула",
    to: "siteTwo",
  },
  {
    id: 3,
    name: "Самолёты ВОВ",
    to: "siteTwo",
  },
  {
    id: 4,
    name: "Кофейня",
    to: "siteTwo",
  },
  {
    id: 5,
    name: "Сайт города",
    to: "siteTwo",
  },
  {
    id: 6,
    name: "ToDo",
    to: "siteTwo",
  },
  {
    id: 7,
    name: "Нынешний проект",
    to: "siteTwo",
  },
  {
    id: 8,
    name: "Информация",
    to: "siteTwo",
  },
];
</script>

<style lang="scss" scoped></style>
