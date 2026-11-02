// @ts-check
import { defineConfig } from 'astro/config';

// Change `site` if the domain ever changes. It is used for canonical URLs and the sitemap.
export default defineConfig({
  site: 'https://www.pianomilodi.com',
  trailingSlash: 'ignore',
});
