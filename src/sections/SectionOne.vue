<template>
  <section id="section-one" class="flex lg:flex-row flex-col">
    <ThemeSwitcherVue />
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
      class="flex lg:flex-nowrap lg:flex-col flex-wrap justify-center items-center lg:w-1/4 w-full my-5 lg:space-y-5 text-center text-raleway lg:text-2vw text-3vh"
    >
      <a
        id="nav-anim-1"
        class="px-5 hover:bg-orange-500 duration-200 rounded-full"
        style="filter: opacity(0)"
        href="#section-two"
        >Резюме</a
      >
      <a
        id="nav-anim-2"
        class="px-5 hover:bg-orange-500 duration-200 rounded-full"
        style="filter: opacity(0)"
        href=""
        >Навыки</a
      >
      <a
        id="nav-anim-3"
        class="px-5 hover:bg-orange-500 duration-200 rounded-full"
        style="filter: opacity(0)"
        href=""
        >Портфолио</a
      >
      <a
        id="nav-anim-4"
        class="px-5 hover:bg-orange-500 duration-200 rounded-full"
        style="filter: opacity(0)"
        href=""
        >Ссылки</a
      >
    </nav>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
// import { animate } from "motion";
import { timeline } from "motion";
import { throttle } from "throttle-debounce";

import ThemeSwitcherVue from "../components/ThemeSwitcher.vue";

onMounted(() => {
  if (window.innerWidth >= 1024) {
    const sequence = [
      [
        "#text-show-1",
        { filter: "opacity(1)", top: "0px" },
        { duration: 1, delay: 0.5 },
      ],
      ["#text-show-2", { filter: "opacity(1)" }, { duration: 1, delay: 0.5 }],
      ["#circle-one", { top: "-40px" }, { duration: 1, at: 2.5 }],
      ["#circle-two", { top: "70vh" }, { duration: 1.3, at: 2.5 }],
      ["#circle-three", { top: "40vh" }, { duration: 1.8, at: 2.5 }],
      ["#nav-anim-1", { filter: "opacity(1)" }, { duration: 0.2 }],
      ["#nav-anim-2", { filter: "opacity(1)" }, { duration: 0.2 }],
      ["#nav-anim-3", { filter: "opacity(1)" }, { duration: 0.4 }],
      ["#nav-anim-4", { filter: "opacity(1)" }, { duration: 0.6 }],
    ];
    timeline(sequence);
  } else {
    const sequence = [
      [
        "#text-show-1",
        { filter: "opacity(1)", top: "0px" },
        { duration: 1, delay: 0.5 },
      ],
      ["#text-show-2", { filter: "opacity(1)" }, { duration: 1, delay: 0.5 }],
      [
        "#circle-one",
        { top: "-100px", left: "50px" },
        { duration: 1, at: 2.5 },
      ],
      ["#circle-two", { top: "40vh" }, { duration: 1.3, at: 2.5 }],
      ["#circle-three", { top: "60vh" }, { duration: 1.8, at: 2.5 }],
      ["#nav-anim-1", { filter: "opacity(1)" }, { duration: 0.2 }],
      ["#nav-anim-2", { filter: "opacity(1)" }, { duration: 0.2 }],
      ["#nav-anim-3", { filter: "opacity(1)" }, { duration: 0.4 }],
      ["#nav-anim-4", { filter: "opacity(1)" }, { duration: 0.6 }],
    ];
    timeline(sequence);
  }

  const circleOne = document.querySelector("#circle-one");
  const circleTwo = document.querySelector("#circle-two");
  const circleThree = document.querySelector("#circle-three");
  function animMainImg() {
    if (window.innerWidth >= 1024) {
      window.addEventListener(
        "pointermove",
        throttle(10, (event) => {
          circleOne.style.transform = `translate(${
            event.clientX / 75 + "px"
          }, ${event.clientY / 75 + "px"})`;
          circleTwo.style.transform = `translate(${
            -event.clientX / 50 + "px"
          }, ${-event.clientY / 50 + "px"})`;
          circleThree.style.transform = `translate(${
            -event.clientX / 125 + "px"
          }, ${-event.clientY / 125 + "px"})`;
        })
      );
    }
  }

  if (window.innerWidth >= 1024) {
    animMainImg();
  }
});
</script>

<style lang="scss" scoped></style>
