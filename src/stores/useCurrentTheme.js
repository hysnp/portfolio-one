import { defineStore } from "pinia";

export const useCurrentTheme = defineStore({
  id: "currentTheme",
  state: () => ({
    themes: {
      themeSwitch: false,
      sysTheme: true,
      currentTheme: "system",
    },
  }),
  actions: {
    setDarkTheme() {
      this.themes.sysTheme = false;
      this.themes.themeSwitch = false;
      this.themes.currentTheme = "dark";
    },
    setLightTheme() {
      this.themes.sysTheme = false;
      this.themes.themeSwitch = false;
      this.themes.currentTheme = "light";
    },
    setSysTheme() {
      this.themes.sysTheme = true;
      this.themes.themeSwitch = false;
      this.themes.currentTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
        ? "dark"
        : "light";
    },
    themeList() {
      this.themes.themeSwitch = !this.themes.themeSwitch;
    },
  },
});
