// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(), // sin opciones extra de modo o carpeta
  build: {
    // -- por defecto Astro escribe el server en dist/server
    //    pero podemos cambiarlo para que salga en ../functions
    server: "../functions",
    // Opcional: controlar carpeta de cliente si quieres
    // client: './client',
  },
});
