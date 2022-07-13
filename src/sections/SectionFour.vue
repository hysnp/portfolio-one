<template>
  <section id="section-four" class="overflow-hidden">
    <p
      id="about-site-anim"
      class="w-max lg:my-5 my-0 mb-5 lg:text-2vw text-3vh text-raleway dark:text-neutral-900 text-neutral-200 uppercase"
    >
      / about site / about site / about site / about site / about site / about
      site / about site / about site / about site / about site / about site /
      about site / about site / about site / about site / about site
    </p>
    <div class="flex lg:flex-row flex-col">
      <div
        class="lg:w-2/3 w-full p-10 lg:bg-gradient-to-l bg-gradient-to-b dark:from-neutral-900 dark:to-black from-neutral-200 to-white overflow-hidden lg:rounded-r-75px rounded-t-75px"
      >
        <h2 class="text-eva text-orange-500 lg:text-3vw text-4vh">О сайте.</h2>
        <p
          class="mb-5 text-raleway dark:text-neutral-400 text-neutral-600 lg:text-1vw text-1vh"
        >
          Инфомация о нём и история разработки.
        </p>
        <p
          class="mb-7 text-noto lg:text-left text-justify lg:text-5/4vw text-2vh"
        >
          Разработка данного сайта заняла у меня чуть меньше месяца со свободным
          графиком. За время создания этого проекта я столкнулся с различными
          трудностями, но все они уже позади. Одна из проблем - отсутствие
          анимации на переключении тем. Причиной этому не моя лень добавить
          всему класс duration-200, а отсутвие возможности анимировать
          linear-gradient, из-за этого часть сайта была анимирована, а другая
          нет, что выглядело не очень. Другой проблемой оказался слайдер.
          Изначально я планировал использовать Vue router, но выглядело это не
          так эффектно, как хотелось. Для этого я решил сделать свой собственный
          слайдер, основой послужил element.scrollTo вместе с behavior: smooth.
          Через время я обнаружил, что element.clientWidth округляет точное
          значение, из-за чего по углам были видны другие блоки. Тут мне помог
          scroll-snap. Последней интересной проблемой оказалось то, что для
          цикла v-for не получается использовать классы Tailwind-а, если биндить
          их. Как я понял, в сборку не попадают классы и всё. Цикл создаёт
          классы правильно, но они не имеют нужных значений в себе. В остальном,
          я как всегда набрался некоторого опыта, чему очень рад. Надеюсь, вам
          сайт понравился тоже.
        </p>
        <a target="_blank" href="https://github.com/str1ve21/portfolio-one">
          <p
            class="w-max lg:px-10 px-5 py-2 text-raleway lg:text-3/2vw text-2vh hover:dark:bg-orange-500 hover:bg-orange-500 dark:bg-neutral-800 bg-neutral-300 duration-200 rounded-full"
          >
            Код сайта
          </p>
        </a>
      </div>
      <div class="relative flex justify-center items-center lg:w-1/3 w-full">
        <div class="holo-gradient w-1/2 rounded-full">
          <img
            id="about-site-logo"
            class="mix-blend-multiply object-contain"
            src="../assets/holo-logo.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.holo-gradient {
  background-image: linear-gradient(
    125deg,
    #f09 20%,
    #fc8b00,
    #ff0,
    #00ff8a,
    #00cfff,
    #cc4cfa 90%
  );
  background-attachment: fixed;
  background-position: top center;
  background-repeat: no-repeat;
}

#about-site-logo {
  animation: 120s linear spinner infinite;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
