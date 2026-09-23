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
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          // Check specific ecosystems first so packages that merely contain
          // "react" in their name (e.g. @radix-ui/react-*, @tanstack/react-query,
          // lucide-react) don't get swept into react-vendor and create a
          // circular dependency between chunks.
          if (
            id.includes("@radix-ui") ||
            id.includes("lucide-react") ||
            id.includes("class-variance-authority") ||
            id.includes("clsx") ||
            id.includes("tailwind-merge")
          ) {
            return "ui-vendor";
          }

          if (
            id.includes("@tanstack") ||
            id.includes("recharts") ||
            id.includes("wouter") ||
            id.includes("marked")
          ) {
            return "app-vendor";
          }

          if (
            id.includes("/node_modules/react/") ||
            id.includes("/node_modules/react-dom/") ||
            id.includes("/node_modules/scheduler/") ||
            id.includes("\\node_modules\\react\\") ||
            id.includes("\\node_modules\\react-dom\\") ||
            id.includes("\\node_modules\\scheduler\\")
          ) {
            return "react-vendor";
          }
        },
      },
    },
  },
});