import { AxiosError } from "axios";

import axios from "@/common/axios";
import router from "@/router";
import { useAuthStore } from "@/stores/authStore";
import notify from "@/utils/notify";

export default function useAppInit() {
  const authStore = useAuthStore();
  let isLoggingOut = false;

  function initRespInterceptor() {
    axios.interceptors.response.use(
      (response) => Promise.resolve(response),
      (err) => {
        const status = (err as AxiosError)?.response?.status;
        const unauthorizedStatuses = [401, 403];
        const requestUrl = err.config.url;

        if (requestUrl.includes("logout")) {
          return Promise.reject(err);
        }

        if (status && unauthorizedStatuses.includes(status) && !isLoggingOut) {
          const currentRoute = router.currentRoute.value;
          if (currentRoute.name !== "Login") {
            handleLogout();
          }
        }
        return Promise.reject(err);
      },
    );
  }

  function handleLogout() {
    if (!isLoggingOut) {
      isLoggingOut = true;
      authStore
        .logout()
        .finally(() => {
          router.push({ name: "Login" });
          notify({ type: "negative", message: "Необходима авторизация" });
          setTimeout(() => (isLoggingOut = false), 500);
        })
        .catch((error) => {
          console.error("Ошибка при выходе:", error);
          isLoggingOut = false;
        });
    }
  }

  initRespInterceptor();
}
