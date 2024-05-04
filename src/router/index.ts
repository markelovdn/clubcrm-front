import { createRouter, createWebHistory } from "vue-router";

// import { checkAccessByRoles, requireAuthentication } from "@/hooks/useAuth";
import { useScrollControl } from "@/hooks/useScrollControl";
import routes from "@/router/routes";
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

  if (!token && to.meta.requireAuth) {
    notify({
      type: "negative",
      message: "Необходима повторная авторизация",
    });
    next({ name: "Login" });
  } else {
    next();
  }
});
export default router;
