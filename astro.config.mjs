import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://learning-astro-sooty.vercel.app",
  integrations: [preact()]
});