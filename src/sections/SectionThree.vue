<template>
  <section id="section-three" class="overflow-hidden">
    <p
      id="portfolio-anim"
      class="w-max lg:my-5 my-0 mb-5 text-4xl text-raleway dark:text-neutral-900 text-neutral-200 uppercase"
    >
      / portfolio / portfolio / portfolio / portfolio / portfolio / portfolio /
      portfolio / portfolio / portfolio / portfolio / portfolio / portfolio /
      portfolio / portfolio / portfolio / portfolio
    </p>
    <div class="flex lg:flex-row flex-col-reverse h-full">
      <h2
        id="portfolio-years"
        class="h-max lg:mt-0 mt-5 text-eva text-center lg:text-10xl text-5xl dark:text-neutral-800 text-neutral-300 lg:vertical-rl z-10"
      >
        2022 - 2019
      </h2>
      <div
        class="portfolio w-full bg-gradient-to-t dark:from-neutral-900 dark:to-black from-neutral-200 to-white rounded-b-75px z-20"
      >
        <h2 class="lg:ml-10 ml-5 text-eva text-orange-500 lg:text-6xl text-4xl">
          Портфолио.
        </h2>
        <p
          class="lg:ml-10 ml-5 mb-5 text-raleway dark:text-neutral-400 text-neutral-600 text-md"
        >
          Самые интересные сайты из истории моего обучения.
        </p>
        <div class="flex flex-col min-h-3xl h-90vh w-full overflow-hidden">
          <div
            id="portfolio-slider"
            class="relative snap-mandatory snap-x flex h-full space-x-1 lg:mx-10 mx-5 rounded-75px overflow-hidden"
          >
            <div
              v-for="site in portfolio"
              :key="site.id"
              :id="`site-${site.id}`"
              class="snap-center relative h-full w-0 min-w-full flex items-center dark:bg-black bg-white overflow-hidden"
            >
              <div
                class="lg:w-3/5 w-full lg:mx-10 mx-5 p-4 dark:bg-black/30 bg-white/30 backdrop-blur-sm rounded-3xl z-20"
              >
                <h1 class="text-eva text-orange-500 lg:text-6xl text-4xl">
                  {{ site.h1 }}
                </h1>
                <p
                  class="mb-5 text-raleway dark:text-neutral-400 text-neutral-600 text-md"
                >
                  {{ site.id }} / {{ site.year }}
                </p>
                <p
                  class="text-noto lg:text-left text-justify lg:text-lg text-sm"
                >
                  {{ site.p }}
                </p>
                <div v-if="site.showLinks" class="flex flex-wrap mt-5">
                  <a
                    target="_blank"
                    :href="`${site.gitLink}`"
                    class="my-2 mr-4"
                  >
                    <p
                      class="w-max lg:px-10 px-5 py-2 text-raleway lg:text-3xl text-xl hover:dark:bg-orange-500 hover:bg-orange-500 dark:bg-neutral-800 bg-neutral-300 duration-200 rounded-full"
                    >
                      GitHub
                    </p>
                  </a>
                  <a target="_blank" :href="`${site.prevLink}`" class="my-2">
                    <p
                      class="w-max lg:px-10 px-5 py-2 text-raleway lg:text-3xl text-xl hover:dark:bg-orange-500 hover:bg-orange-500 dark:bg-neutral-800 bg-neutral-300 duration-200 rounded-full"
                    >
                      Предпрсмотр
                    </p>
                  </a>
                </div>
              </div>
              <img
                class="absolute right-0 h-full dark:brightness-50 brightness-100 object-cover object-top z-10"
                :src="`../../public/page-${site.id}.webp`"
                :alt="`Скриншот моего ${site.id} сайта.`"
              />
            </div>
          </div>
          <div id="slider-buttons" class="flex justify-around lg:my-10 my-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-12 mx-5 cursor-pointer hover:stroke-orange-500 duration-200"
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
              class="w-12 mx-5 cursor-pointer hover:stroke-orange-500 duration-200"
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
  </section>
</template>

<script setup>
import { onMounted } from "vue";

const portfolio = [
  {
    id: 8,
    h1: "Портфолио.",
    p: `Как бы странно не выглядело, но почему бы не начать с самого портфолио? Сайт получился весьма хорошим и
        многофункциональным. И к тому же, это самый свежий сайт из всех. Подробнее о разработке данного портфолио
        вы можете прочитать ниже, а если хотите посмотреть мои проекты - листайте вправо.`,
    year: 2022,
    showLinks: true,
    gitLink: "https://github.com/str1ve21/portfolio-one",
    prevLink: "#",
  },
  {
    id: 7,
    h1: "Курсовая работа.",
    p: `Данный проект был создан для выполнения курсовой работы по информатике. Чем интересен данный проект? - спросите вы,
        а я отвечу, что на нём я реализовал горизонтальный скролл страницы, работу с sessionStorage для сохранения данных
        о предпочтении скролла, и всё это без каких-либо фреймворков и библиотек для JS. Возможно он не такой особенный,
        как остальные, но он имеет место быть. А ещё он мне нравится. Интересный факт: иконки для портфолио и курсовой одинаковы.`,
    year: 2022,
    showLinks: true,
    gitLink: "https://github.com/str1ve21/it-kursovaya",
    prevLink: "https://str1ve21.github.io/it-kursovaya/",
  },
  {
    id: 6,
    h1: "ToDo список.",
    p: `Я считаю данный сайт лучшим в плане логики и работы с массивами. Его я сделал суммарно за 6 дней, но я
        не планирую его забрасывать, в будущем будет более интересный интерфейс и больше функционала. В общем,
        по моему мнению он хорош, но и не идеален.`,
    year: 2022,
    showLinks: true,
    gitLink: "https://github.com/str1ve21/vite-todo",
    prevLink: "https://str1ve21.github.io/vite-todo/",
  },
  {
    id: 5,
    h1: "Изучение Vue.",
    p: `Данный сайт я использовал как место для обучения, и в целом песочницу. Там я использовал
        Options API, props а не state мэнеджер, theme switcher. Последний в свою очередь я стал
        использовать почти на всех своих сайтах, в том числе и на этом, но его доработанную версию.
        Если вам нужен код этого сайта, я был бы готов показать его, а в остальном, не вижу смысла загружать
        его на GitHub. Это последний сайт за 22 год, а следующие за 20. Дело в том, что в 21 году я был
        заняд подготовкой к ЕГЭ. Были личные проекты, но они не такие интересные. Другую часть года отняла
        работа курьером и ВУЗ.`,
    year: 2022,
    showLinks: false,
  },
  {
    id: 4,
    h1: "Кофейня.",
    p: `Этот landing я разрабатывал для Envato market. На разработку ушло много времени,
        около 5 месяцев. Основная причина этому - неопределённость с дизайном и улучшение
        кода. Данная страница так же понравилась моим знакомым, но, к сожалению, модерация
        не оценила его. Наверное, это мой лучший проект на jQuery. Было грустно, что он
        не прошёл, но я решил на этом не останавливаться.`,
    year: 2020,
    showLinks: true,
    gitLink: "https://github.com/str1ve21/landing-coffee-shop",
    prevLink: "https://str1ve21.github.io/landing-coffee-shop/",
  },
  {
    id: 3,
    h1: "Самолёты ВОВ.",
    p: `Тут я использовал библиотеку TiltJS вместе с jQuery, да и код уже не такой страшный.
        Как итог, данную работу так и не смогли оценить, причина тому - заочное обучение,
        а защита работ у нас должна была быть очно. Конечно данный факт меня не сильно расстроил,
        ведь благодаря этой работе я смог набраться большим количеством опыта.`,
    year: 2020,
    showLinks: true,
    gitLink: "https://github.com/str1ve21/ww2-planes",
    prevLink: "https://str1ve21.github.io/ww2-planes/",
  },
  {
    id: 2,
    h1: "Интересные места Барнаула.",
    p: `Это мой первый многостраничный сайт. Его я создавал для школы,
        так как на новогодние каникулы нам задали сделать сайты. Код там конечно плохой,
        и адаптивность хромает, но в общем и целом, он имеет место быть,
        учитывая мой опыт на тот момент. По итогу, учителям не понравилось то,
        что шрифт для заголовка и текста одинаковый. В принципе, замечание
        справедливое, хоть тогда я и не особо был доволен, особенно учитывая то,
        что этот сайт выглядел в разы лучше всех других.`,
    year: 2019,
    showLinks: true,
    gitLink: "https://github.com/str1ve21/places-of-barnaul",
    prevLink: "https://str1ve21.github.io/places-of-barnaul/",
  },
  {
    id: 1,
    h1: "Мой первый сайт.",
    p: `Все мы с чего-то начинали. Я, естественно, не исключение. В основном,
        свой путь в FrontEnd-е я начинал с сайта HTMLBook и MDN. Изредка смотрел
        различные видео, для более подробного понимания темы, разве что избегал
        "самые аху### способы". Каждую тему я закреплял на практике, путём
        создания различных элементов сайта, но тогда я не особо переживал по
        поводу исторической ценности своих первых шагов, поэтому почти всё я
        делал на одном сайте. До наших дней сохранилась только финальная версия
        сайта и найденный археологами "Безымянный.png" файл (фон). Думаю, код вам не
        особо интересен, поэтому тут его нет.`,
    year: 2019,
    showLinks: false,
  },
  {
    id: 0,
    h1: "Будущее.",
    p: `На этом портфолио не заканчивается, ведь дальше будут ещё более интересные проекты.
        У меня много идей для реализации, и много чего нужно изучить, но и в то же время,
        если вы - работодатель, то возможно именно благодаря вам моё портфолио наполнится
        новыми красками.`,
    year: "20xx",
    showLinks: false,
  },
];

onMounted(() => {
  const chevronLeft = document.querySelector("#chevron-left");
  const chevronRight = document.querySelector("#chevron-right");
  const portfolioSlider = document.querySelector("#portfolio-slider");
  const sliderChildCount = portfolioSlider.childElementCount;

  let currentSlide = 0;

  chevronLeft.addEventListener("click", () => {
    --currentSlide;
    if (currentSlide < 0) {
      currentSlide = sliderChildCount - 1;
    }
    portfolioSlider.scrollTo({
      top: 0,
      left: portfolioSlider.clientWidth * currentSlide,
      behavior: "smooth",
    });
  });
  chevronRight.addEventListener("click", () => {
    ++currentSlide;
    if (currentSlide + 1 > sliderChildCount) {
      currentSlide = 0;
    }
    portfolioSlider.scrollTo({
      top: 0,
      left: portfolioSlider.clientWidth * currentSlide,
      behavior: "smooth",
    });
  });
});
</script>

<style lang="scss" scoped></style>
