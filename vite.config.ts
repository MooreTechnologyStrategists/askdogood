import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
  alias: {
    // Point @ to client/src
    "@": path.resolve(__dirname, "client", "src"),

    // shared lives at the root 'shared' folder, not src/shared
    "@shared": path.resolve(__dirname, "shared"),

    // (optional) if you have attached_assets like in the test config:
    // "@assets": path.resolve(__dirname, "attached_assets"),
  },
},
});
