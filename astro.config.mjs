// @ts-check

import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://twincitiesdad.com',
	output: 'server', // Enable SSR for dynamic pages
	adapter: netlify(),
	integrations: [mdx(), sitemap()],
});
