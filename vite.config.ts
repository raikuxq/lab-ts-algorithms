import { defineConfig } from "vite";
import * as path from "path";

export default defineConfig({
  build: {
    minify: "terser",
    terserOptions: {
      format: {
        comments: false,
      },
    },
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: [],
    },
    outDir: "lib",
  },
});
