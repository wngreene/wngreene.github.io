// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// NOTE: `site` is the canonical origin. When the custom domain is added,
// change it here and the sitemap + canonical links follow automatically.
export default defineConfig({
  site: 'https://wngreene.github.io',

  // Emit /pubs.html rather than Astro's default /pubs/index.html.
  // Published papers cite these paths, so they must not change.
  build: { format: 'file' },

  integrations: [sitemap()],
});
