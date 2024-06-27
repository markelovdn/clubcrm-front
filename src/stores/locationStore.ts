import { defineStore } from "pinia";
import { ref } from "vue";

import { locationApi } from "@/api";
import { TCountry, TDistrict, TRegion } from "@/api/Location/types";

export const useLocationStore = defineStore("addressStore", () => {
  const countries = ref<TCountry[]>([]);
  const districts = ref<TDistrict[]>([]);
  const regions = ref<TRegion[]>([]);

  function requestCountries() {
    return locationApi.getCountries().then((resp) => {
      setCountries(resp);
    });
  }

  function requestDistricts() {
    return locationApi.getDistricts().then((resp) => {
      setDistricts(resp);
    });
  }

  function requestRegions() {
    return locationApi.getRegions().then((resp) => {
      setRegions(resp);
    });
  }

  function setCountries(payload: TCountry[]) {
    countries.value = payload;
  }

  function setDistricts(payload: TDistrict[]) {
    districts.value = payload;
  }

  function setRegions(payload: TRegion[]) {
    regions.value = payload;
  }

  return {
    countries,
    districts,
    regions,
    requestCountries,
    requestDistricts,
    requestRegions,
  };
});
