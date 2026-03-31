import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://SEU_USUARIO.github.io',
  // Se o repositório NÃO se chamar "SEU_USUARIO.github.io", descomente a linha abaixo:
  // base: '/tenants10',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
