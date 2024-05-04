import axios from "axios";
import { ref } from "vue";

import notify from "@/utils/notify";

function getAuthHeader() {
  const token = localStorage.getItem("token");
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
}

const checkEnv = (envValue: string) => {
  return envValue || "/";
};

export class BaseApi {
  $loading = ref(false);
  $error = ref(false);
  $message = ref("");
  $code = ref("");
  axiosInstance;
  xdebugSession;

  constructor() {
    this.xdebugSession = import.meta.env.VITE_XDEBUG_SESSION
      ? `?XDEBUG_SESSION=${import.meta.env.VITE_XDEBUG_SESSION}`
      : "";
    const baseURL = checkEnv(import.meta.env.VITE_BASE_URL);
    this.axiosInstance = axios.create({
      baseURL: baseURL,
    });

    this.axiosInstance.interceptors.request.use(
      (config) => ({
        ...config,
        headers: { ...config.headers, ...getAuthHeader() },
      }),
      (error) => {
        notify({ type: "negative", message: "Не удалось запросить данные" });
        return Promise.reject(error);
      },
    );
    this.setupInterceptors();
  }

  setupInterceptors() {
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        const status = error.response?.status;
        const unauthorizedStatuses = [401, 403];
        if (unauthorizedStatuses.includes(status) && window.location.pathname !== "/login") {
          console.log(error.response.data.message);
          //Использовал window.location так как router вызывал ошибку цикличность ссылок;
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
        notify({ type: "negative", message: error.response.data.error });

        return Promise.reject(error);
      },
    );
  }

  request(method: "get" | "post" | "put" | "delete", url: string, data = null) {
    url += this.xdebugSession;
    this.$loading.value = true;
    return this.axiosInstance({ method, url, data })
      .then((response) => {
        console.log({ ...response.data });
        return response.data;
      })
      .catch((error) => {
        console.log({ ...error });
        this.$error.value = true;
        this.$message.value = error.message || "An error occurred";
        this.$code.value = error.response ? error.response.status : "500";
        throw error;
      })
      .finally(() => {
        this.$loading.value = false;
      });
  }

  get(url: string) {
    return this.request("get", url);
  }

  post(url: string, data?: any) {
    return this.request("post", url, data);
  }

  put(url: string, data: any) {
    return this.request("put", url, data);
  }

  delete(url: string) {
    return this.request("delete", url);
  }
}