import { defineStore } from "pinia";
import { computed, ref } from "vue";

import { authApi } from "@/api";
import { TForgotPasswordArgs, TLoginArgs, TRegistrationPayload, TResetPasswordArgs, TUser } from "@/api/Auth/types";
import { socketConnection } from "@/common/socket";
import notify from "@/utils/notify";

export const useAuthStore = defineStore("authStore", () => {
  const token = ref<null | string>(localStorage.token ?? null);
  const user = ref<TUser | null>(null);

  function requestUserInfo() {
    return authApi.getAuthUser().then((res) => {
      setUser(res);
    });
  }

  function setUser(data: TUser) {
    user.value = data;
  }

  function login(payload: TLoginArgs) {
    return authApi
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

  function registration(payload: TRegistrationPayload) {
    return authApi.registration(payload).then((resp) => {
      localStorage.setItem("token", resp.data.token);
      token.value = resp.data.token;
      setUser(resp.data.user);
    });
  }

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

  function forgotPassword(payload: TForgotPasswordArgs) {
    return authApi
      .forgotPassword(payload)
      .then(() => {
        notify({
          type: "positive",
          message: "Ссылка для восстановления пароля отправлена на указанный email",
        });
      })
      .catch(() => {
        notify({
          type: "negative",
          message: "Данный email не зарегистрирован, или ссылка для восстановления пароля уже отправлена",
        });
      });
  }

  function resetPassword(payload: TResetPasswordArgs) {
    return authApi
      .resetPassword(payload)
      .then(() => {
        notify({
          type: "positive",
          message: "Пароль успешно изменен, войдите в личный кабинет",
        });
      })
      .catch(() => {
        notify({
          type: "negative",
          message: "Время действия ссылки для восстановления пароля истекло",
        });
      });
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
    registration,
  };
});
