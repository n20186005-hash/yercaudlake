import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = process.env.SITE_URL?.trim() || undefined;

export default defineConfig({
  site: SITE,
  integrations: SITE ? [sitemap()] : [],
  vite: { plugins: [tailwindcss()] }
});
