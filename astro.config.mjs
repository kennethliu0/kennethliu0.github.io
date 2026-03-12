// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://kennethliu.me",
  integrations: [sitemap()],
  image: {
    domains: ["cdn.jsdelivr.net"],
  },
});
