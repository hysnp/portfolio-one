<template>
  <footer id="section-five" class="overflow-hidden">
    <p
      id="footer-anim"
      class="w-max lg:my-5 my-0 mb-5 text-4xl text-raleway dark:text-neutral-900 text-neutral-200 uppercase"
    >
      / contacts / contacts / contacts / contacts / contacts / owo / contacts /
      contacts / contacts / contacts / contacts / contacts / contacts / contacts
      / contacts / contacts
    </p>
    <div
      class="flex lg:flex-row flex-col justify-center items-center w-full p-10 bg-gradient-to-b dark:from-neutral-900 dark:to-black from-neutral-200 to-white overflow-hidden rounded-t-75px"
    >
      <div
        id="contacts"
        class="flex flex-row flex-wrap justify-around items-center lg:w-1/2 w-full lg:mb-0 lg:mr-10 mb-10 lg:px-10"
      >
        <a
          v-for="link in links"
          :key="link.id"
          :href="link.href"
          target="_blank"
          class="m-2 min-w-10 w-5vw"
        >
          <img
            :src="`./src/assets/${link.name}.svg`"
            :alt="`Логотип ${link.name}`"
          />
        </a>
      </div>
      <div
        id="about-me"
        class="flex lg:flex-row flex-col justify-center items-center lg:w-1/2 w-full"
      >
        <img
          class="h-40 lg:mr-10 lg:mb-0 mb-5 object-contain"
          src="../assets/me.webp"
          alt=""
        />
        <div id="about-me-text">
          <h2 class="text-eva lg:text-left text-center text-3xl">
            <span
              v-on:click="generateRandomHello()"
              class="text-orange-500 cursor-pointer"
              >{{ randomHello }}</span
            >, я Михаил Оплачко.
          </h2>
          <p class="text-noto lg:text-left text-justify lg:text-lg text-sm">
            Рад, что вас заинтересовало моё портфолио. Если у вас остались
            некоторые вопросы, или я интересен вам, можете написать мне в
            социальных сетях или по почте из списка этой секции. Я с радостью
            отвечу вам.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const links = [
  {
    id: 1,
    name: "vk",
    href: "https://vk.com/str1ve21",
  },
  {
    id: 2,
    name: "tg",
    href: "https://t.me/str1ve",
  },
  {
    id: 3,
    name: "ds",
    href: "https://discordapp.com/users/329928163553574912",
  },
  {
    id: 4,
    name: "hh",
    href: "https://barnaul.hh.ru/applicant/resumes/view?resume=e86a7784ff0a557c590039ed1f596d57716f37",
  },
  {
    id: 5,
    name: "gmail",
    href: "mailto:end3avour21@gmail.com",
  },
];

const hello = [
  "Привет",
  "Салам алейкум",
  "Hello",
  "Ahlan wa sahlan",
  "Hola",
  "Прывитанне",
  "Здравейте",
  "Chao",
  "Aloha",
  "Shalom",
  "Buenas dias",
  "Buon giorno",
  "Ave",
  "Guten Tag",
  "Ola",
  "Buna",
  "Здраво",
  "Привіт",
  "Paivaa",
  "Bonjour",
  "Namaste",
  "Zdravo",
  "God dag",
  "Saluton",
  "Konnichi wa",
];

let randomHello = ref(hello[Math.floor(Math.random() * hello.length)]);

function generateRandomHello() {
  randomHello.value = hello[Math.floor(Math.random() * hello.length)];
}
</script>

<style lang="scss" scoped></style>
