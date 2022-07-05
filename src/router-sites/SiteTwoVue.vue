<template>
  <div class="flex lg:flex-row-reverse flex-col">
    <div class="txt lg:w-3/5 w-auto m-5">
      <h1 class="text-eva text-center lg:text-4vw text-3vh text-orange-500">
        Интересные места Барнаула.
      </h1>
      <p class="text-noto text-justify lg:text-3/2vw text-2vh">
        Это мой первый сайт, который я считаю нормальным сайтом, а не полигоном
        для учёбы. Его я создавал для школы, так как на новогодние каникулы нам
        задали сделать многостраничные сайты. Код там конечно не очень приятный,
        и адаптивность хромает, но в общем и целом, он имеет место быть,
        учитывая мой опыт на тот момент. По итогу, учителям не понравилось то,
        что шрифт для заголовка и текста одинаковый. В принципе, замечание
        справедливое, хоть тогда я и не особо был доволен, особенно учитывая то,
        что этот сайт выглядел в разы лучше всех других.
      </p>
      <div class="h-px my-5 dark:bg-white bg-black"></div>
      <blockquote
        class="m-5 text-raleway lg:text-3/2vw text-2vh lg:text-right text-center text-orange-500"
      >
        Дата создания: Ноя. 2019 - Янв. 2020 (прим.)
      </blockquote>
    </div>

    <div class="img flex flex-col lg:w-2/5 w-auto">
      <img
        class="m-2 rounded-2xl object-cover border-2 dark:border-white border-black"
        src="../assets/page2.webp"
        alt="Главная сайта о достопримечательностях Барнаула."
      />
      <a
        target="_blank"
        href="#"
        class="m-2 dark:bg-neutral-800 bg-neutral-200 hover:dark:bg-orange-500 hover:bg-orange-500 duration-200 rounded-full object-cover"
      >
        <p class="w-full my-3 text-raleway lg:text-3/2vw text-2vh text-center uppercase">
          Исходный код
        </p>
      </a>
      <a
        target="_blank"
        href="../src/portfolio/barnaul/index.html"
        class="m-2 dark:bg-neutral-800 bg-neutral-200 hover:dark:bg-orange-500 hover:bg-orange-500 duration-200 rounded-full object-cover"
      >
        <p class="w-full my-3 text-raleway lg:text-3/2vw text-2vh text-center uppercase">
          Предпросмотр
        </p>
      </a>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
