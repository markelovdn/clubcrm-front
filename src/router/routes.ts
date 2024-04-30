import type { RouteRecordRaw } from "vue-router";

import authRoutes from "./authRoutes";
import { MyRouteMeta } from "./types";

const routes: Array<RouteRecordRaw & { meta: MyRouteMeta }> = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/pages/MainPage/MainPage.vue"),
    meta: {
      title: "Главная",
    },
  },

  {
    path: "/UI",
    name: "UI",
    component: () => import("@/pages/UIPage.vue"),
    meta: {
      title: "UI",
    },
  },
];

const allRoutes = routes.concat(authRoutes);

export default allRoutes;
