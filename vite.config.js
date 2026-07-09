import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import sitemap from 'vite-plugin-sitemap';

const sitemapRoutes = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/#home', changefreq: 'monthly', priority: 0.8 },
  { url: '/#services', changefreq: 'monthly', priority: 0.8 },
  { url: '/#portfolio', changefreq: 'weekly', priority: 0.9 },
  { url: '/#about', changefreq: 'monthly', priority: 0.7 },
  { url: '/#contact', changefreq: 'monthly', priority: 0.8 },
];

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    sitemap({
      hostname: 'https://hasnainwali-official.vercel.app',
      routes: sitemapRoutes,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
      exclude: ['/admin', '/private'],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'vendor-react'
            if (id.includes('three') || id.includes('@react-three')) return 'vendor-three'
            if (id.includes('gsap')) return 'vendor-gsap'
            return 'vendor'
          }
        }
      }
    }
  }
});
