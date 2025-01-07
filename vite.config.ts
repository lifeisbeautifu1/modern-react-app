/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import { codecovVitePlugin } from "@codecov/vite-plugin";
import react from "@vitejs/plugin-react";
import path from "path";
import "dotenv/config";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

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
      port: 8080,
    },
    plugins: [
      react({
        babel: {
          configFile: true,
        },
      }),
      codecovVitePlugin({
        enableBundleAnalysis: isProduction,
        bundleName: "@codecov/vite-plugin",
        uploadToken: process.env.CODECOV_TOKEN,
      }),
    ],
    test: {
      environment: "jsdom",
      globals: true,
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
