import { defineStore } from "pinia";
import { computed, ref } from "vue";

import { authApi } from "@/api";
import { TForgotPasswordArgs, TLoginArgs, TRegistrationPayload, TResetPasswordArgs } from "@/api/Auth/types";
import { messages } from "@/common/messages";
// import { socketConnection } from "@/common/socket";
import notify from "@/utils/notify";

import { useUserStore } from "./userStore";

export const useAuthStore = defineStore("authStore", () => {
  const token = ref<null | string>(localStorage.token ?? null);
  const userStore = useUserStore();

  function login(payload: TLoginArgs) {
    return authApi
      .login(payload)
      .then((resp) => {
        localStorage.setItem("token", resp.token);
        token.value = resp.token;
        userStore.setUser(resp.user);
      })
      .catch((error) => {
        notify({ type: "negative", message: error.response.data.errors.auth });
      });
  }

  function registration(payload: TRegistrationPayload) {
    return authApi
      .registration(payload)
      .then((resp) => {
        localStorage.setItem("token", resp.token);
        token.value = resp.token;
        userStore.setUser(resp.user);
      })
      .catch((error) => {
        const errors = error?.response?.data?.errors;
        if (errors) {
          Object.keys(errors).forEach((key) => {
            if (errors[key]) {
              notify({ type: "negative", message: errors[key] });
            }
          });
        } else {
          notify({ type: "negative", message: messages.unknownError });
        }

        throw error;
      });
  }

  function logout() {
    return authApi.logout().finally(() => {
      localStorage.removeItem("token");
      userStore.unsetUser();
      // socketConnection.disconnect();
      //использовал window.location так как router вызывал ошибку цикличность ссылок;
      window.location.href = "/login";
    });
  }

  function forgotPassword(payload: TForgotPasswordArgs) {
    return authApi
      .forgotPassword(payload)
      .then(() => {
        notify({
          type: "positive",
          message: messages.forgotPasswordSuccess,
        });
      })
      .catch((error) => {
        notify({
          type: "negative",
          message: messages.forgotPasswordError,
        });
        throw error;
      });
  }

  function resetPassword(payload: TResetPasswordArgs) {
    return authApi
      .resetPassword(payload)
      .then(() => {
        notify({
          type: "positive",
          message: messages.resetPasswordSuccess,
        });
      })
      .catch(() => {
        notify({
          type: "negative",
          message: messages.resetPasswordError,
        });
      });
  }

  const isLoggedIn = computed(() => token.value);

  return {
    forgotPassword,
    token,
    login,
    logout,
    isLoggedIn,
    resetPassword,
    registration,
  };
});
