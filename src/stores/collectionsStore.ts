import { defineStore } from "pinia";
import { computed, ref } from "vue";

import { collectionsApi } from "@/api";
import { TUserRole } from "@/api/User/types";

export const useCollectionsStore = defineStore("collectionsStore", () => {
  const roles = ref<TUserRole[]>([]);

  async function requestRoles() {
    const res = await collectionsApi.getRoles();
    setRoles(res);
  }

  function setRoles(data: TUserRole[]) {
    roles.value = data;
  }

  const getRoles = computed(() => {
    return roles.value.map((item: TUserRole) => {
      return { label: item.title, value: item.id };
    });
  });

  return {
    roles,
    getRoles,
    requestRoles,
  };
});
