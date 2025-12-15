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
  },
});