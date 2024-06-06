import { TUserRole } from "@/api/User/types";

export interface MyRouteMeta {
  title?: string;
  requireAuth?: boolean;
  roles?: Array<TUserRole["code"]>;
  anyRole?: boolean;
}

declare module "vue-router" {
  interface RouteMeta extends MyRouteMeta {}
}
