import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

import { useAuthStore } from "@/stores/authStore";
import { useUserStore } from "@/stores/userStore";
import notify from "@/utils/notify";

export async function ensureUserIsLoggedIn(to: RouteLocationNormalized, next: NavigationGuardNext) {
  const userStore = useUserStore();
  const authStore = useAuthStore();
  const token = localStorage.getItem("token");

  if (token && to.meta.requireAuth === true) {
    try {
      await userStore.requestUserInfo();
      next();
    } catch (error) {
      if (error) {
        localStorage.removeItem("token");
        authStore.logout();
        next({ name: "Login" });
        notify({
          type: "negative",
          message: "Ошибка при попытке восстановления сессии. Пожалуйста авторизуйтесь повторно",
        });
      }
    }
  } else {
    next();
  }
}

export function requireAuthentication(to: RouteLocationNormalized, next: NavigationGuardNext) {
  const userStore = useUserStore();
  if (to.meta.requireAuth !== false && !userStore.user) {
    next({ name: "Login" });
    return false;
  }
  return true;
}

export function checkAccessByRoles(to: RouteLocationNormalized, next: NavigationGuardNext) {
  const userStore = useUserStore();
  if (to.meta.roles && userStore.user) {
    const userRoles = userStore.user.roles.map((role) => role.code);
    const hasAccess = to.meta.roles.some((role) => userRoles.includes(role));
    if (!hasAccess) {
      notify({ type: "negative", message: "Не достаточно прав для доступа к данной странице" });
      next({ name: "AccessDenied" });
      //TODO: сделать страницу AccessDenied
      return false;
    }
  }
  return true;
}

export function hasRole(role: string) {
  const userStore = useUserStore();
  return userStore.user?.roles.some((userRole) => userRole.code === role);
}
