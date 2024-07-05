import { fileURLToPath, URL } from "node:url";

import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

export const config = {
  plugins: [
    vue({
      template: { transformAssetUrls },
      script: {
        defineModel: true,
      },
    }),
    quasar({
      sassVariables: "src/quasar-variables.sass",
    }),
    eslint({ cache: false }),
  ],
  server: {
    host: "scdch34.clubcrm.loc",
    port: 8081,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@img": fileURLToPath(new URL("./public/img", import.meta.url)),
    },
  },
};

export default defineConfig(() => {
  return config;
});
