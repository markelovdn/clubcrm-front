import { BaseApi } from "@/api/BaseApi";

import { TRegistrationPayload } from "../Auth/types";
import { TUserPayload } from "./types";
export class UserApiService extends BaseApi {
  getAuthUser() {
    return this.get("/user");
  }

  createUser(data: TRegistrationPayload) {
    return this.post("/users", data);
  }

  setProfile(data: TUserPayload) {
    return this.post(`/setProfile`, data);
  }

  updateProfile(data: TUserPayload) {
    return this.put(`/users/${data.id}`, data);
  }
}
