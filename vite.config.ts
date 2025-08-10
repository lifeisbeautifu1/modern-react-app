/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import { codecovVitePlugin } from "@codecov/vite-plugin";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import "dotenv/config";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  const isCI = typeof process.env.CI !== "undefined";

  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
    plugins: [
      tailwindcss(),
      react({
        babel: {
          configFile: true,
        },
      }),
      codecovVitePlugin({
        enableBundleAnalysis: isProduction && isCI,
        bundleName: "@codecov/vite-plugin",
        uploadToken: process.env.CODECOV_TOKEN,
        telemetry: false,
      }),
      VitePWA({
        registerType: "autoUpdate",
        manifest: false,
        workbox: {
          globPatterns: [
            "**/*.{js,css,html,ico,png,svg,webp,eot,ttf,woff,woff2}",
          ],
        },
      }),
    ],
    test: {
      environment: "jsdom",
      globals: true,
      setupFiles: "./src/setup-tests.ts",
      include: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)",
      ],
      coverage: {
        include: [
          "**/src/**/*.[jt]s?(x)",
          "**/src/**/?(*.)+(spec|test).[jt]s?(x)",
          "!**/src/main.tsx",
        ],
        provider: "v8",
        reporter: ["text", "html", "clover", "json", "json-summary"],
      },
    },
  };
});
