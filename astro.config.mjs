import { defineConfig } from 'astro/config';

export default defineConfig({
  site:     'https://modelera.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'he'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
