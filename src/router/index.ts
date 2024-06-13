import { createRouter, createWebHistory } from "vue-router";

import { TUserRole } from "@/api/User/types";
import { messages } from "@/common/messages";
// import { checkAccessByRoles, requireAuthentication } from "@/hooks/useAuth";
import { useScrollControl } from "@/hooks/useScrollControl";
import routes from "@/router/routes";
import { useUserStore } from "@/stores/userStore";
import notify from "@/utils/notify";

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.afterEach((to) => {
  const { scrollToElement, scrollToTop } = useScrollControl();
  setTimeout(() => {
    if (to.hash) {
      scrollToElement(to.hash);
    } else {
      scrollToTop();
    }
  }, 100);
});

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title}` : "ClubCRM";
  const token = localStorage.getItem("token");
  const userStore = useUserStore();

  if (!token && to.meta.requireAuth) {
    notify({
      type: "negative",
      message: messages.authorizationRequired,
    });
    next({ name: "Login" });
  }

  if (to.meta.anyRole && !userStore.hasRole("any")) {
    next({ name: "Profile" });
  }

  if (to.meta.roles) {
    const hasRequiredRole = Array.isArray(to.meta.roles)
      ? to.meta.roles.some((role) => userStore.hasRole(role))
      : userStore.hasRole(to.meta.roles?.[0] as TUserRole["code"]);
    if (hasRequiredRole) {
      next();
    } else {
      notify({
        type: "negative",
        message: "Доступ запрещен.",
      });
      next({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router;
