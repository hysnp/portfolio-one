<template>
  <section id="section-three" class="overflow-hidden">
    <p
      id="portfolio-anim"
      class="w-max lg:my-5 my-0 mb-5 lg:text-2vw text-3vh text-raleway dark:text-neutral-900 text-neutral-200 uppercase"
    >
      / portfolio / portfolio / portfolio / portfolio / portfolio / portfolio /
      portfolio / portfolio / portfolio / portfolio / portfolio / portfolio /
      portfolio / portfolio / portfolio / portfolio
    </p>
    <div class="flex lg:flex-row flex-col-reverse h-full">
      <h2
        id="portfolio-years"
        class="h-max text-eva text-center lg:text-8vw text-5vh dark:text-neutral-800 text-neutral-300 lg:vertical-rl z-10"
      >
        2019 - 2022
      </h2>
      <div class="portfolio w-full">
        <div
          class="lg:p-10 p-5 bg-gradient-to-t dark:from-neutral-900 dark:to-black from-neutral-200 to-white rounded-b-75px z-20"
        >
          <h2 class="text-eva text-orange-500 lg:text-3vw text-4vh">
            Портфолио.
          </h2>
          <p
            class="mb-5 text-raleway dark:text-neutral-400 text-neutral-600 lg:text-1vw text-1vh"
          >
            Самые интересные сайты из истории моего обучения.
          </p>
          <div class="flex flex-col h-90vh w-full overflow-hidden">
            <div
              id="portfolio-slider"
              class="flex h-full w-full rounded-75px overflow-hidden"
            >
              <div id="site-1" class="min-w-full bg-white"></div>
              <div id="site-2" class="min-w-full bg-black"></div>
              <div id="site-3" class="min-w-full bg-white"></div>
            </div>
            <div id="slider-buttons" class="flex justify-around lg:mt-10 mt-5">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-12 mx-5 cursor-pointer"
              id="chevron-left"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-12 mx-5 cursor-pointer"
              id="chevron-right"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const chevronLeft = document.querySelector("#chevron-left");
  const chevronRight = document.querySelector("#chevron-right");
  const portfolioSlider = document.querySelector("#portfolio-slider");
  const sliderChildCount = portfolioSlider.childElementCount;

  let currentSlide = 0;

  chevronLeft.addEventListener("click", () => {
    if (currentSlide > 0) {
      --currentSlide;
      portfolioSlider.scrollTo({
        top: 0,
        left: portfolioSlider.clientWidth * currentSlide,
        behavior: "smooth",
      });
    }
  });
  chevronRight.addEventListener("click", () => {
    if (currentSlide + 1 < sliderChildCount) {
      ++currentSlide;
      portfolioSlider.scrollTo({
        top: 0,
        left: portfolioSlider.clientWidth * currentSlide,
        behavior: "smooth",
      });
    }
  });

  // const portfolioBgColors = [
  //   "#B8513A",
  //   "#CB9442",
  //   "#A6B83A",
  //   "#79B83A",
  //   "#40BA69",
  //   "#40B3BA",
  //   "#405ABA",
  //   "#8440BA",
  //   "#BA4082",
  // ];
  // document.querySelector("#rand-bg").style.backgroundColor = portfolioBgColors[Math.floor(Math.random() * portfolioBgColors.length)];
});
</script>

<style lang="scss" scoped></style>
