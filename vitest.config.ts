import { defineConfig } from "vitest/config";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@chia": path.resolve(__dirname, "./src"),
    },
  },
});
