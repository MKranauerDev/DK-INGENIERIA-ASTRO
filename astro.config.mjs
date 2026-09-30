import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({ vite: { plugins: [tailwindcss()] } });

export default defineConfig({
  site: 'https://mkranauerdev.github.io',
  base: '/DK-INGENIERIA-ASTRO',
});