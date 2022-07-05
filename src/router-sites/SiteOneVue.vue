<template>
  <div class="flex lg:flex-row-reverse flex-col">
    <div class="txt lg:w-3/5 w-auto m-5 z-20">
      <h1 class="text-eva text-center lg:text-4vw text-3vh text-orange-500">
        Мой первый сайт.
      </h1>
      <p class="text-noto text-justify lg:text-3/2vw text-2vh">
        Все мы с чего-то начинали. Я, естественно, не исключение. В основном,
        свой путь в FrontEnd-е я начинал с сайта HTMLBook и MDN. Изредка смотрел
        различные видео, для более подробного понимания темы, разве что избегал
        "самые аху### способы". Каждую тему я закреплял на практике, путём
        создания различных элементов сайта, но тогда я не особо переживал по
        поводу исторической ценности своих первых шагов, поэтому почти всё я
        делал на одном сайте. До наших дней сохранилась только финальная версия
        сайта и найденный археологами "Безымянный.png" файл. Думаю, код вам не
        особо интересен, поэтому тут его нет.
      </p>
      <div class="h-px my-5 dark:bg-white bg-black"></div>
      <blockquote
        class="m-5 text-raleway lg:text-3/2vw text-2vh lg:text-right text-center text-orange-500"
      >
        Дата создания: Авг. 2019 - Окт. 2019 (прим.)
      </blockquote>
    </div>

    <div class="img flex flex-col lg:w-2/5 w-auto">
      <img
        class="m-2 rounded-2xl object-cover border-2 dark:border-white border-black"
        src="../assets/page1-v1.webp"
        alt="Одна из первых вариаций сайта."
      />
      <img
        class="m-2 rounded-2xl object-cover border-2 dark:border-white border-black"
        src="../assets/page1-v2.webp"
        alt="Последняя версия."
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
