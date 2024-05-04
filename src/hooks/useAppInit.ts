import { BaseApi } from "@/api/BaseApi";

export default function useAppInit() {
  const api = new BaseApi();

  function init() {
    api.setupInterceptors();
  }

  return { init };
}
