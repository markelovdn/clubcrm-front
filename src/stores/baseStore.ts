import { defineStore } from "pinia";
import { ref } from "vue";

export const useBaseStore = defineStore("baseStore", () => {
  const isLoading = ref(false);

  const setLoading = (value: boolean) => {
    isLoading.value = value;
  };

  return {
    isLoading,
    setLoading,
  };
});
