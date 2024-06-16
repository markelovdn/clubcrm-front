import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { parse, stringify } from "zipson";

import { userApi } from "@/api";
import { TUser, TUserPayload, TUserRole } from "@/api/User/types";
import { messages } from "@/common/messages";
import notify from "@/utils/notify";

export const useUserStore = defineStore(
  "userStore",
  () => {
    const user = ref<TUser>();

    function setUser(data: TUser) {
      user.value = data;
    }

    function unsetUser() {
      user.value = undefined;
    }

    async function requestUserInfo() {
      const res = await userApi.getAuthUser();
      setUser(res);
      return res;
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

    async function setProfile(data: TUserPayload) {
      return userApi
        .setProfile(data)
        .then(() => {
          requestUserInfo();
          notify({ type: "positive", message: messages.successSaveData });
        })
        .catch((err) => {
          console.log(err);
          // Object.values(err.response.data.errors.response.original.message).forEach((error) => {
          // notify({ type: "negative", message: String(error) });
          // });
          throw err;
        });
    }

    async function updateProfile(data: TUserPayload) {
      return userApi
        .updateProfile(data)
        .then(() => {
          notify({ type: "positive", message: messages.successSaveData });
        })
        .catch((err) => {
          console.log(err);
          // Object.values(err.response.data.errors.response.original.message).forEach((error) => {
          // notify({ type: "negative", message: String(error) });
          // });
          throw err;
        });
    }

    const getUserInfo = computed(() => {
      return user.value;
    });
    const getUserId = computed(() => user.value?.id);

    const hasRole = (role: TUserRole["code"] | "any"): boolean => {
      if (role === "any" && user.value?.roles) {
        return user.value?.roles.length > 0 ? true : false;
      }
      return user.value?.roles.some((userRole) => userRole.code === role) ?? false;
    };

    return {
      createUser,
      setProfile,
      updateProfile,
      user,
      setUser,
      unsetUser,
      getUserInfo,
      getUserId,
      hasRole,
      requestUserInfo,
    };
  },
  {
    persist: {
      paths: ["user"],
      storage: sessionStorage,
      serializer: {
        serialize: stringify,
        deserialize: parse,
      },
    },
  },
);
