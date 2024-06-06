import type { RouteRecordRaw } from "vue-router";

import { MyRouteMeta } from "./types";

const userRoutes: Array<RouteRecordRaw & { meta: MyRouteMeta }> = [
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/pages/ProfilePage/ProfilePage.vue"),
    meta: {
      title: "Профиль",
      requireAuth: true,
    },
  },
];

export default userRoutes;
