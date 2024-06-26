import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://benjent.github.io/lea-kormas/',
  base: '/lea-kormas',
  integrations: [tailwind()]
});
