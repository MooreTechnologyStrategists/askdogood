// client/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  root: ".",
  base: "/", // <-- ADD THIS - critical for Azure SWA
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "../shared"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets", // <-- Explicitly set this (it's the default, but be explicit)
    emptyOutDir: true,   // <-- Clean the output directory before build
    // No manualChunks: splitting vendor code by substring match (e.g. "react")
    // repeatedly produced circular/out-of-order chunk loading that crashed the
    // app in production ("Cannot read properties of undefined (reading
    // 'createContext')"). Let Rollup's default chunking handle this safely.
  },
});