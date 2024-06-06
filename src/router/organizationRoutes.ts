import type { RouteRecordRaw } from "vue-router";

import { MyRouteMeta } from "./types";

const organizationRoutes: Array<RouteRecordRaw & { meta: MyRouteMeta }> = [
  {
    path: "/organizations",
    name: "Organizations",
    component: () => import("@/pages/OrganizationPage/OrganizationPage.vue"),
    meta: {
      title: "Организации",
      requireAuth: true,
      roles: ["root", "admin", "manager"],
    },
  },
];

export default organizationRoutes;
