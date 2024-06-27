import { BaseApi } from "@/api/BaseApi";

export class AddressApiService extends BaseApi {
  getCountries() {
    return this.get("/countries");
  }

  getCountry(id: number) {
    return this.get(`/countries/${id}`);
  }

  getDistricts() {
    return this.get(`/districts`);
  }

  getDistrict(id: number) {
    return this.get(`/districts/${id}`);
  }

  getRegions() {
    return this.get(`/regions`);
  }

  getRegion(id: number) {
    return this.get(`/regions/${id}`);
  }
}
