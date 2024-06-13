import { AuthApiService } from "./Auth/AuthApiService";
import { CollectionsApiService } from "./Collections/CollectionsApiService";
import { UserApiService } from "./User/UserApiService";

export const authApi = new AuthApiService();
export const userApi = new UserApiService();
export const collectionsApi = new CollectionsApiService();
