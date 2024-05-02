import { AxiosError } from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { parse, stringify } from "zipson";

import { authApi } from "@/api";
import { TForgotPasswordArgs, TLoginArgs, TRegistrationPayload, TResetPasswordArgs, TUser } from "@/api/Auth/types";
import { socketConnection } from "@/common/socket";
import notify from "@/utils/notify";

export const useAuthStore = defineStore(
  "authStore",
  () => {
    const token = ref<null | string>(localStorage.token ?? null);
    const user = ref<TUser>();

    function requestUserInfo() {
      return authApi
        .getAuthUser()
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          throw err;
        });
    }

    function setUser(data: TUser) {
      user.value = data;
    }

    async function login(payload: TLoginArgs) {
      try {
        const resp = await authApi.login(payload);
        localStorage.setItem("token", resp.data.token);
        token.value = resp.data.token;
        setUser(resp.data.user);
        return Promise.resolve(resp.data);
      } catch (err: unknown) {
        if (err instanceof AxiosError && err.response) {
          notify({ type: "negative", message: String(err.response.data.errors.auth) });
        }
        return Promise.reject(err);
      }
    }
    async function registration(payload: TRegistrationPayload) {
      try {
        const resp = await authApi.registration(payload);
        localStorage.setItem("token", resp.data.token);
        token.value = resp.data.token;
        setUser(resp.data.user);
        return Promise.resolve(resp.data);
      } catch (err) {
        console.log(err);
        return Promise.reject(err);
      }
    }
    async function logout() {
      authApi
        .logout()
        .then((res) => {
          localStorage.removeItem("token");
          user.value = undefined;
          socketConnection.disconnect();
          notify({ type: "positive", message: res.data.message });
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

    function test() {
      return authApi.test().then((res) => res.data);
    }
    const getUserInfo = computed(() => user.value);
    const getUserId = computed(() => user.value?.id);
    const isLoggedIn = computed(() => user.value && token.value);
    return {
      forgotPassword,
      token,
      login,
      registration,
      requestUserInfo,
      user,
      getUserInfo,
      logout,
      isLoggedIn,
      resetPassword,
      getUserId,
      test,
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
