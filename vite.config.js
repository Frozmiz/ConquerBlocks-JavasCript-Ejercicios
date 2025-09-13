import { defineConfig } from "vite";

export default defineConfig({
  base: "/ConquerBlocks-JavasCriptVainilla-AlejandroGonzalez/",
  build: {
    rollupOptions: {
      input: [
        "index.html",
        "ejercicio1.html",
        "ejercicio2.html",
        "ejercicio3.html",

      ],
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
