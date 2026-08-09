import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import sitemap from 'vite-plugin-sitemap';
import { projects, servicesData } from './src/constants/index.js';

const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Sitemap routes are generated from real, crawlable pages only.
// No `#fragment` URLs — Google indexes URLs, not in-page anchors.
// (The plugin adds '/' itself — don't list it here or it's duplicated.)
const projectPaths = projects.map((p) => `/projects/${p.id}`);
const servicePaths = servicesData.map((s) => `/services/${slugify(s.title)}`);
const dynamicRoutes = [...projectPaths, ...servicePaths];

// vite-plugin-sitemap's changefreq/priority accept a map keyed by path,
// so each route type gets its own value instead of one flat default.
const changefreqMap = { '/': 'weekly' };
const priorityMap = { '/': 1.0 };
for (const p of projectPaths) {
  changefreqMap[p] = 'monthly';
  priorityMap[p] = 0.8;
}
for (const p of servicePaths) {
  changefreqMap[p] = 'monthly';
  priorityMap[p] = 0.7;
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    sitemap({
      hostname: 'https://hasnainwali-official.vercel.app',
      dynamicRoutes,
      changefreq: changefreqMap,
      priority: priorityMap,
      exclude: ['/admin', '/private'],
      readable: true,
      // We ship our own hand-written robots.txt (blocks scraper bots,
      // sets crawl rules) — don't let this plugin overwrite it at build.
      generateRobotsTxt: false,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-gsap': ['gsap', '@gsap/react'],
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 500,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});