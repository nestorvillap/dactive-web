import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://dactive.es", 
  output: "server",
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: cloudflare(),
});
