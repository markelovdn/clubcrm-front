import { BaseApi } from "@/api/BaseApi";

import { TRegistrationPayload } from "../Auth/types";
export class UserApiService extends BaseApi {
  createUser(data: TRegistrationPayload) {
    return this.post("/users", data);
  }

  getAuthUser() {
    return this.get("/user");
  }
}
