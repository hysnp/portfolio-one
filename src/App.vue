<template>
  <main class="h-full dark:bg-black bg-white">
    <ThemeSwitcherVue />
    <SectionOneVue />
    <SectionTwoVue />
    <SectionThreeVue />
    <SectionFourVue />
  </main>
</template>

<script setup>
// vue3 parts
import SectionOneVue from "./sections/SectionOne.vue";
import SectionTwoVue from "./sections/SectionTwo.vue";
import SectionThreeVue from "./sections/SectionThree.vue";
import SectionFourVue from "./sections/SectionFour.vue";

import { onMounted } from "vue";
// import { animate } from "motion";
import { timeline } from "motion";
import { throttle } from "throttle-debounce";

import ThemeSwitcherVue from "./components/ThemeSwitcher.vue";

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
  const skillsAnim = document.querySelector("#skills-anim");
  const portfolioYears = document.querySelector("#portfolio-years");
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
          skillsAnim.style.transform = `translate(${
            event.clientX / 100 + "px"
          }, ${event.clientY / 100 + "px"})`;
          portfolioYears.style.transform = `translate(${
            -event.clientX / 150 + "px"
          }, ${-event.clientY / 150 + "px"})`;
        })
      );
    }
  }

  if (window.innerWidth >= 1024) {
    animMainImg();
  }
});
</script>

<style lang="scss">
::selection {
  color: ghostwhite;
  background: #c77528;
}

#resume-anim, #portfolio-anim {
  animation: 60s linear text-left-glide infinite;
}

@media (min-width: 1024px) {
  #resume-anim, #portfolio-anim {
    animation: 240s linear text-left-glide infinite;
  }
}

@keyframes text-left-glide {
  0% {
    margin-left: 0;
  }
  50% {
    margin-left: -50%;
  }
  100% {
    margin-left: 0;
  }
}
</style>
