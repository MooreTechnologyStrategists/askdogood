// client/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

export default defineConfig({
  root: ".",          // the client folder
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),          // -> client/src
      "@shared": path.resolve(__dirname, "../shared"), // -> root/shared
      // "@assets": path.resolve(__dirname, "../attached_assets"), // if you need it
    },
  },
  build: {
    outDir: "dist",
  },
});
