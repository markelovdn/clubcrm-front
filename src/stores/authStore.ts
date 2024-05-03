import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { parse, stringify } from "zipson";

import { authApi } from "@/api";
import { TForgotPasswordArgs, TLoginArgs, TResetPasswordArgs, TUser } from "@/api/Auth/types";
import { socketConnection } from "@/common/socket";
import notify from "@/utils/notify";

export const useAuthStore = defineStore(
  "authStore",
  () => {
    const token = ref<null | string>(localStorage.token ?? null);
    const user = ref<TUser | null>(null);

    function requestUserInfo() {
      return authApi
        .getAuthUser()
        .then((res) => {
          setUser(res);
        })
        .catch((err) => {
          console.error("Error fetching user info:", err);
        });
    }

    function setUser(data: TUser) {
      user.value = data;
    }

    async function login(payload: TLoginArgs) {
      await authApi
        .login(payload)
        .then((resp) => {
          localStorage.setItem("token", resp.token);
          token.value = resp.token;
          setUser(resp.user);
        })
        .catch((error) => {
          notify({ type: "negative", message: error.response.data.errors.auth });
        });
    }

    // async function registration(payload: TRegistrationPayload) {
    //   try {
    //     const resp = await authApi.registration(payload);
    //     localStorage.setItem("token", resp.data.token);
    //     token.value = resp.data.token;
    //     setUser(resp.data.user);
    //     return Promise.resolve(resp.data);
    //   } catch (err) {
    //     console.log(err);
    //     return Promise.reject(err);
    //   }
    // }
    function logout() {
      authApi
        .logout()
        .then((res) => {
          localStorage.removeItem("token");
          user.value = null;
          socketConnection.disconnect();
          notify({ type: "positive", message: res.message });
        })
        .catch(() => {
          localStorage.removeItem("token");
        });
    }
    async function forgotPassword(payload: TForgotPasswordArgs) {
      try {
        await authApi.forgotPassword(payload);
        notify({
          type: "positive",
          message: "Ссылка для восстановления пароля отправлена на указанный email",
        });
        return Promise.resolve();
      } catch (err) {
        console.log(err);
        notify({
          type: "negative",
          message: "Данный email не зарегистрирован, или ссылка для восстановления пароля уже отправлена",
        });
        return Promise.reject(err);
      }
    }
    async function resetPassword(payload: TResetPasswordArgs) {
      try {
        await authApi.resetPassword(payload);
        notify({
          type: "positive",
          message: "Пароль успешно изменен, войдите в личный кабинет",
        });
        return Promise.resolve();
      } catch (err) {
        console.log(err);
        notify({
          type: "negative",
          message: "Время действия ссылки для восстановления пароля истекло",
        });
        return Promise.reject(err);
      }
    }

    const getUserInfo = computed(() => user.value);
    const getUserId = computed(() => user.value?.id);
    const isLoggedIn = computed(() => user.value && token.value);
    return {
      forgotPassword,
      token,
      login,
      requestUserInfo,
      user,
      getUserInfo,
      logout,
      isLoggedIn,
      resetPassword,
      getUserId,
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
