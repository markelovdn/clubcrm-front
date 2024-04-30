import type { RouteRecordRaw } from "vue-router";

import { MyRouteMeta } from "./types";

const authRoutes: Array<RouteRecordRaw & { meta: MyRouteMeta }> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/LoginPage/LoginPage.vue"),
    meta: {
      requireAuth: false,
      title: "Логин",
      header: false,
      footer: false,
    },
  },

  {
    path: "/reset-password/:resetToken",
    name: "ResetPassword",
    component: () => import("@/pages/ResetPasswordPage/ResetPasswordPage.vue"),
    meta: {
      requireAuth: false,
      title: "Сбросить пароль",
      header: false,
    },
  },
];

export default authRoutes;
