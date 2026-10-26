import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = process.env.SITE_URL?.trim() || 'https://yercaudlake.com';

export default defineConfig({
  site: SITE,
  integrations: [sitemap({filter:page=>!/[\/](?:404|cookies|privacy|terms)(?:[\/]|\.html|$)/.test(page)})],
  vite: { plugins: [tailwindcss()] }
});
