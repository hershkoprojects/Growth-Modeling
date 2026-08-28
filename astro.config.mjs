import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://growth-modeling.pages.dev',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'he'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
