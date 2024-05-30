import { defineStore } from "pinia";
import { computed, ref } from "vue";

import { userApi } from "@/api";
import { TUser, TUserRole } from "@/api/User/types";
import { messages } from "@/common/messages";
import notify from "@/utils/notify";

export const useUserStore = defineStore("userStore", () => {
  const user = ref<TUser>();

  function setUser(data: TUser) {
    user.value = data;
  }

  function unsetUser() {
    user.value = undefined;
  }

  function requestUserInfo() {
    return userApi.getAuthUser().then((res) => {
      setUser(res);
    });
  }

  async function createUser(data: any) {
    return userApi
      .createUser(data)
      .then(() => {
        notify({ type: "positive", message: messages.successSaveData });
      })
      .catch((err) => {
        Object.values(err.response.data.errors.response.original.message).forEach((error) => {
          notify({ type: "negative", message: String(error) });
        });
        throw err;
      });
  }

  const getUserInfo = computed(() => user.value);
  const getUserId = computed(() => user.value?.id);
  const hasRole = (role: TUserRole["code"]): boolean => {
    return user.value?.roles.some((userRole) => userRole.code === role) ?? false;
  };

  return {
    createUser,
    user,
    setUser,
    unsetUser,
    getUserInfo,
    getUserId,
    hasRole,
    requestUserInfo,
  };
});
