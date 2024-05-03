// import axios, { AxiosError } from "axios";

// import router from "@/router";
// import { useAuthStore } from "@/stores/authStore";

// export default function useAppInit() {
//   const authStore = useAuthStore();

//   function initRespInterceptor() {
//     axios.interceptors.response.use(
//       (response) => Promise.resolve(response),
//       (err) => {
//         const status = (err as AxiosError)?.response?.status;
//         const unauthorizedStatuses = [401, 403];
//         const requestUrl = err.config.url;

//         if (requestUrl.includes("logout")) {
//           return Promise.reject(err);
//         }

//         if (status && unauthorizedStatuses.includes(status)) {
//           const currentRoute = router.currentRoute.value;
//           if (currentRoute.name !== "Login") {
//             authStore.logout();
//           }
//         }
//         return Promise.reject(err);
//       },
//     );
//   }

//   initRespInterceptor();
// }
