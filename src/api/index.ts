import { AuthApiService } from "./Auth/AuthApiService";
import { CollectionsApiService } from "./Collections/CollectionsApiService";
import { AddressApiService } from "./Location/LocationApiService";
import { UserApiService } from "./User/UserApiService";

export const authApi = new AuthApiService();
export const userApi = new UserApiService();
export const collectionsApi = new CollectionsApiService();
export const locationApi = new AddressApiService();
