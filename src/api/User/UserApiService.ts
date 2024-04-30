import axios from "@/common/axios";
export class UserApiService {
  getUserInfo() {
    return axios.get("/getUserByToken", {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  }

  createUser(data: any) {
    return axios.post("/users", data);
  }

  updateUserInfo(data: any, userId?: number) {
    return axios.put(`/users/${userId}`, {
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

  deleteUser(userId: number) {
    return axios.delete(`/users/${userId}`, { params: { userId: userId } });
  }
}
