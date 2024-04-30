import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import "./assets/style/main.css";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { Dialog, Notify, Quasar } from "quasar";
import rus from "quasar/lang/ru";
import { createApp } from "vue";

import App from "./App.vue";
import useAppInit from "./hooks/useAppInit";
import router from "./router";

const app = createApp(App);

app.use(createPinia().use(piniaPluginPersistedstate));
useAppInit();

app.use(router);
app.use(Quasar, {
  plugins: {
    Dialog,
    Notify,
  },
  lang: rus,
  config: {
    brand: {
      primary: "#315194",
      secondary: "#7F97CA",
      accent: "#9C27B0",
      yellow: "#F7B70B",
      dark: "#424242",
      positive: "#21BA45",
      negative: "#C10015",
      info: "#e0e0e0",
      warning: "#F2C037",
    },
  },
});

app.mount("#app");
