<template>
  <div class="absolute h-max right-5 top-5 z-50">
    <div
      class="grid place-content-center h-5vh w-5vh dark:bg-neutral-800 bg-neutral-100 rounded-full"
      @click="currentThemeStore.themeList"
    >
      <button>
        <moon-icon
          v-if="themes.currentTheme === 'light'"
          class="lg:icon-size icon-size-sm"
        />
        <sun-icon
          v-if="themes.currentTheme === 'dark'"
          class="lg:icon-size icon-size-sm"
        />
      </button>
    </div>

    <transition>
      <div
        v-if="currentThemeStore.themes.themeSwitch === true"
        class="absolute top-0 flex flex-col w-5vh pb-1vh pt-6vh space-y-1vh dark:bg-neutral-900 bg-neutral-200 rounded-full -z-10"
      >
        <button @click="currentThemeStore.setLightTheme">
          <sun-icon
            class="lg:icon-size icon-size-sm mx-auto duration-200 hover:text-yellow-500"
          />
        </button>

        <button @click="currentThemeStore.setDarkTheme">
          <moon-icon
            class="lg:icon-size icon-size-sm mx-auto duration-200 hover:text-sky-400"
          />
        </button>

        <button @click="currentThemeStore.setSysTheme">
          <chip-icon
            class="lg:icon-size icon-size-sm mx-auto duration-200 hover:text-green-400"
          />
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
// import { ArrowUpIcon } from "@heroicons/vue/outline";
import { SunIcon } from "@heroicons/vue/outline";
import { MoonIcon } from "@heroicons/vue/outline";
import { ChipIcon } from "@heroicons/vue/outline";

import { onMounted } from "vue";

// darkThemeStore stuff
import { storeToRefs } from "pinia";
import { useCurrentTheme } from "../stores/useCurrentTheme";
const currentThemeStore = useCurrentTheme();
const { themes } = storeToRefs(currentThemeStore);

onMounted(() => {
  themes.value.currentTheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      if (themes.value.sysTheme) {
        themes.value.currentTheme = event.matches ? "dark" : "light";
      }
    });
});

currentThemeStore.$subscribe((mutation, state) => {
  if (state.themes.currentTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else if (state.themes.currentTheme === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    state.themes.currentTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light";
  }
});
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
