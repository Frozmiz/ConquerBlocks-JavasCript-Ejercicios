import { defineConfig } from "vite";
import { resolve} from "path";

export default defineConfig({
  base: "/ConquerBlocks-JavasCript-Ejercicios/",
  build: {
    rollupOptions: {
      input: {
        main:       resolve(__dirname, "index.html"),
        ejercicio1: resolve(__dirname, "src/ejercicios/ejercicio1/ejercicio1.html"),
        ejercicio2: resolve(__dirname, "src/ejercicios/ejercicio2/ejercicio2.html"),
        ejercicio3: resolve(__dirname, "src/ejercicios/ejercicio3/ejercicio3.html"),
        ejercicio4: resolve(__dirname, "src/ejercicios/ejercicio4/ejercicio4.html"),
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
