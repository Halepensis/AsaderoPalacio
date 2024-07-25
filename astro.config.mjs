import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://asaderopalacio.es',
  prefetch: {
    defaultStrategy:'load',
    prefetchAll:true
  },
  base: "/",
  integrations: [preact(),sitemap()],
  output: "static",
  i18n:{
    
    defaultLocale:"es",
    locales:["es","en"],
    routing:{
      prefixDefaultLocale:false
    },
    fallback:{
      en:'es',
      en:'es'
    }
  }
});