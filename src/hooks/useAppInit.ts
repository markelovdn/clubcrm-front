import { BaseApi } from "@/api/BaseApi";
import { useUserStore } from "@/stores/userStore";

export default function useAppInit() {
  const api = new BaseApi();
  const userStore = useUserStore();

  async function init() {
    api.setupInterceptors();
    await userStore.requestUserInfo();
  }

  return { init };
}
