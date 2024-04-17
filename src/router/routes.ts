import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/pages/MainPage/MainPage.vue"),
    meta: {
      background: "primary",
      requireAuth: false,
      title: "Главная",
      footer: true,
    },
  },
];

export default routes;
