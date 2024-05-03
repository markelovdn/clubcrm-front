import { BaseApi } from "@/api/BaseApi";
export class UserApiService extends BaseApi {
  createUser(data: any) {
    return this.post("/users", data);
  }

  updateUserInfo(data: any, userId?: number) {
    return this.put(`/users/${userId}`, {
      firstName: data.firstName,
      secondName: data.secondName,
      middleName: data.middleName,
      email: data.email,
      phone: data.phone,
      photo: data.photo,
      regionId: data.regionId,
      companyName: data.companyName,
      userId: data.userId,
    });
  }
}
