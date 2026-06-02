// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        "astro/virtual-modules/transitions-router.js",
        "astro/virtual-modules/transitions-types.js",
        "astro/virtual-modules/transitions-events.js",
        "astro/virtual-modules/transitions-swap-functions.js",
        "astro/actions/runtime/entrypoints/client.js",
      ],
    },
  },
  adapter: netlify(),
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Karla",
      cssVariable: "--font-karla",
      weights: [200, 400, 700],
      styles: ["normal"],
    },
  ],
});
