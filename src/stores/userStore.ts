import { defineStore } from "pinia";
import { computed, ref } from "vue";

import { userApi } from "@/api";
import { TUser, TUserRole } from "@/api/User/types";
import notify from "@/utils/notify";

export const useUserStore = defineStore("userStore", () => {
  const user = ref<TUser>();

  async function requestUserInfo() {
    try {
      const res = await userApi.getUserInfo();
      setUser(res.data.userData);
      return res;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  function setUser(data: TUser) {
    user.value = data;
  }

  async function createUser(data: any) {
    return userApi
      .createUser(data)
      .then(() => {
        notify({ type: "positive", message: "Данные успешно сохранены" });
      })
      .catch((err) => {
        Object.values(err.response.data.errors.response.original.message).forEach((error) => {
          notify({ type: "negative", message: String(error) });
        });
        throw err;
      });
  }
  function updateUserInfo(data: any, userId?: number) {
    if (getUserId.value === undefined) {
      return Promise.reject(new Error("UserId is undefined"));
    }
    return userApi
      .updateUserInfo(data, userId)
      .then(() => {
        notify({ type: "positive", message: "Данные успешно сохранены" });
      })
      .catch((err) => {
        console.log(err.response.data.errors.response.original.message);
        Object.values(err.response.data.errors.response.original.message).forEach((error) => {
          notify({ type: "negative", message: String(error) });
        });
        throw err;
      });
  }

  function deleteUser(userId: number) {
    return userApi
      .deleteUser(userId)
      .then(() => {
        notify({ type: "positive", message: "Пользователь успешно удален" });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const getUserInfo = computed(() => user.value);
  const getUserId = computed(() => user.value?.id);
  const hasRole = (role: TUserRole["code"]): boolean => {
    return user.value?.roles.some((userRole) => userRole.code === role) ?? false;
  };

  return {
    requestUserInfo,
    createUser,
    updateUserInfo,
    deleteUser,
    user,
    setUser,
    getUserInfo,
    getUserId,
    hasRole,
  };
});
