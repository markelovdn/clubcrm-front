import type { RouteRecordRaw } from "vue-router";

import authRoutes from "./authRoutes";
import organizationRoutes from "./organizationRoutes";
import { MyRouteMeta } from "./types";
import userRoutes from "./userRoutes";

const routes: Array<RouteRecordRaw & { meta: MyRouteMeta }> = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/pages/MainPage/MainPage.vue"),
    meta: {
      title: "Главная",
      requireAuth: true,
      anyRole: true,
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

  {
    path: "/:catchAll(.*)*",
    name: "NotFound",
    component: () => import("@/pages/NotFounPage.vue"),
    meta: {
      title: "Страница не найдена",
    },
  },
];

const allRoutes = routes.concat(authRoutes, userRoutes, organizationRoutes);

export default allRoutes;
