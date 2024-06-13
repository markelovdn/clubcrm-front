import { BaseApi } from "@/api/BaseApi";

export class CollectionsApiService extends BaseApi {
  getRoles() {
    return this.get("/roles");
  }
}
