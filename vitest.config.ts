import { fileURLToPath, URL } from "node:url";

import { configDefaults, defineConfig, mergeConfig } from "vitest/config";

import { config as viteConfig } from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/*"],
      root: fileURLToPath(new URL("./", import.meta.url)),
    },
  }),
);
