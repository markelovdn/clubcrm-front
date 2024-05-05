import type { RouteRecordRaw } from "vue-router";

import { MyRouteMeta } from "./types";

const authRoutes: Array<RouteRecordRaw & { meta: MyRouteMeta }> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/LoginPage/LoginPage.vue"),
    meta: {
      title: "Логин",
      header: false,
      footer: false,
    },
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token") !== null) {
        next({ name: "Main" });
      } else {
        next();
      }
    },
  },
  {
    path: "/registration",
    name: "Registration",
    component: () => import("@/pages/RegistrationPage/RegistrationPage.vue"),
    meta: {
      title: "Регистрация",
      header: false,
      footer: false,
    },
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token") !== null) {
        next({ name: "Main" });
      } else {
        next();
      }
    },
  },

  {
    path: "/reset-password/:resetToken",
    name: "ResetPassword",
    component: () => import("@/pages/ResetPasswordPage/ResetPasswordPage.vue"),
    meta: {
      title: "Сбросить пароль",
      header: false,
      footer: false,
    },
  },
];

export default authRoutes;
