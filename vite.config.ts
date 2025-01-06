/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@test-utils": path.resolve(__dirname, "./utils/test-utils.tsx"),
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
  plugins: [
    react({
      babel: {
        configFile: true,
      },
    }),
  ],
  test: {
    environment: "jsdom",
    globals: true,
    include: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    coverage: {
      include: [
        "**/src/**/*.[jt]s?(x)",
        "**/src/**/?(*.)+(spec|test).[jt]s?(x)",
        "!**/src/main.tsx",
      ],
      provider: "v8",
    },
  },
});
