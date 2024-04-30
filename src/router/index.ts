import { createRouter, createWebHistory } from "vue-router";

import { checkAccessByRoles, ensureUserIsLoggedIn, requireAuthentication } from "@/hooks/useAuth";
import { useScrollControl } from "@/hooks/useScrollControl";
import routes from "@/router/routes";

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
  document.title = (to.meta.title as string) || "CLubCRM";
  await ensureUserIsLoggedIn(to, next);

  if (!requireAuthentication(to, next)) return;

  if (!checkAccessByRoles(to, next)) return;
});

export default router;
