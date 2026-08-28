import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// IMPORTANT: change this to your real domain once you buy one.
// Until then, leave your Cloudflare Pages URL here (e.g. https://growth-modeling.pages.dev)
export default defineConfig({
  site: 'https://growth-modeling.pages.dev',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'he'],
    routing: {
      prefixDefaultLocale: false, // English lives at /, Hebrew at /he/
    },
  },
  integrations: [sitemap()],
});
