import * as CONSTANTS from "./utils/constants";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: `${CONSTANTS.TITLE}`,
      titleTemplate: `${CONSTANTS.TITLE_TEMPLATE}`,
      meta: [
        {
          name: "theme-color",
          hid: "theme-color",
          content: `${CONSTANTS.THEME_COLOR}`,
        },
      ],
    },
  },
  modules: [
    //    "@nuxt/image",
    "@nuxtjs/color-mode",
    //    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-schema-org",
    "nuxt-simple-sitemap",
  ],
  colorMode: { classSuffix: "", preference: "dark", fallback: "dark" },
});
