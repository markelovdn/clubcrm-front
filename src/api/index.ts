import { AuthApiService } from "./Auth/AuthApiService";
import { UserApiService } from "./User/UserApiService";

export const authApi = new AuthApiService();
export const userApi = new UserApiService();
