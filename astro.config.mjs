import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://asaderopalacio.com',
  prefetch: {
    defaultStrategy:'load',
    prefetchAll:true
  },
  base: "/",
  integrations: [preact()],
  output: "static",
  i18n:{
    defaultLocale:"es",
    locales:["es","en"],
    routing:{
      prefixDefaultLocale:false
    },
    fallback:{
      en:'es'
    }
  }
});