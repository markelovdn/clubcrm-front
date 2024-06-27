import { BaseApi } from "@/api/BaseApi";

export class UserApiService extends BaseApi {
  getOrganizations() {
    return this.get("/organizations");
  }

  getOrganization(id: number) {
    return this.get(`/organizations/${id}`);
  }
}
