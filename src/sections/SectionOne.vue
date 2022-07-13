<template>
  <section id="section-one" class="flex lg:flex-row flex-col">
    <div
      class="relative grid place-content-center h-screen lg:w-3/4 w-full px-10 lg:bg-gradient-to-r bg-gradient-to-b from-white to-neutral-200 dark:from-black dark:to-neutral-900 lg:rounded-r-75px rounded-b-75px overflow-hidden z-10"
    >
      <h1
        id="text-show-1"
        class="relative text-eva lg:text-6vw text-5vh lg:text-left text-center z-20"
        style="filter: opacity(0); top: -40px"
      >
        Здравствуйте, меня зовут <span class="text-orange-500">Михаил</span>.
      </h1>
      <p
        id="text-show-2"
        class="relative text-noto lg:text-2vw text-2vh lg:text-left text-center z-20"
        style="filter: opacity(0)"
      >
        И я - FrontEnd разработчик. Будущий.
      </p>

      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        id="circle-one"
        class="absolute"
        style="top: -500px; left: 250px"
      >
        <circle
          cx="200"
          cy="200"
          r="200"
          class="dark:fill-neutral-800 fill-neutral-300"
        />
      </svg>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        id="circle-two"
        class="absolute"
        style="top: -300px; left: 60vw"
      >
        <circle
          cx="100"
          cy="100"
          r="100"
          class="dark:fill-neutral-900 fill-white"
        />
      </svg>
      <svg
        width="900"
        height="900"
        viewBox="0 0 900 900"
        xmlns="http://www.w3.org/2000/svg"
        id="circle-three"
        class="absolute"
        style="top: -900px; left: -500px"
      >
        <circle
          cx="450"
          cy="450"
          r="450"
          class="dark:fill-neutral-800 fill-neutral-200"
        />
      </svg>
    </div>
    <nav
      class="flex lg:flex-nowrap flex-wrap lg:flex-col flex-row justify-center items-center lg:w-1/4 w-full lg:my-10 my-5 lg:space-y-5 text-center text-raleway lg:text-2vw text-3vh"
    >
      <a
        id="nav-anim-1"
        class="px-5 py-2 hover:text-orange-500 duration-200"
        style="filter: opacity(0)"
        href="#section-two"
        >Резюме</a
      >
      <a
        id="nav-anim-2"
        class="px-5 py-2 hover:text-orange-500 duration-200"
        style="filter: opacity(0)"
        href="#section-three"
        >Портфолио</a
      >
      <a
        id="nav-anim-3"
        class="px-5 py-2 hover:text-orange-500 duration-200"
        style="filter: opacity(0)"
        href="#section-four"
        >О сайте</a
      >
      <a
        id="nav-anim-4"
        class="px-5 py-2 hover:text-orange-500 duration-200"
        style="filter: opacity(0)"
        href="#section-five"
        >Ссылки</a
      >
    </nav>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
