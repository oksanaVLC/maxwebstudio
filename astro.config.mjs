// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://maxwebstudio.com",

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "ru", "fr"],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-ES",
          en: "en-US",
          ru: "ru-RU",
        },
      },
    }),
  ],
});
