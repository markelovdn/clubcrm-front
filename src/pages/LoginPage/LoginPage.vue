<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import logoUrl from "@/assets/img/logo_2.png";
import { countryCodes } from "@/common/constants";
import ForgotPasswordModal from "@/components/Modals/ForgotPasswordModal/ForgotPasswordModal.vue";
import { emailValidator, requiredValidator, useValidation } from "@/hooks/useValidation";
import { useAuthStore } from "@/stores/authStore";

import { TLoginPayload } from "./types";

const data = ref<TLoginPayload>({
  phone: "",
  password: "",
});

const countyCode = ref("+7");
const getcountyCodes = computed(() => {
  return countryCodes.map((item: { label: string; code: string }) => {
    return { label: item.label, value: item.code };
  });
});
const emit = defineEmits(["close", "validation-change"]);

const { handleBlur, getErrorAttrs, isValid } = useValidation<TLoginPayload>(data, emit, {
  phone: { requiredValidator, emailValidator },
  password: { requiredValidator },
});

const isPwd = ref(true);
const showModalForgotPassword = ref(false);

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const showLoginError = ref(false);

const onLoginSuccess = () => {
  router.push({ name: "Main", query: { ...route.query } });
};
const onLoginFail = () => (showLoginError.value = true);

const handleLogin = () => {
  authStore
    .login({
      email: data.value.phone,
      password: data.value.password,
    })
    .then(onLoginSuccess, onLoginFail);
};
</script>

<template>
  <div class="main-container absolute-center">
    <div class="login-form__container">
      <q-img class="logo" :src="logoUrl" fit="contain" height="100px" />
      <q-form class="q-mb-sm" @keydown.enter="handleLogin">
        <div class="row q-col-gutter-x-xs q-col-gutter-y-lg">
          <div class="col-5">
            <q-select
              v-model="countyCode"
              label="Код страны*"
              outlined
              :options="getcountyCodes"
              option-label="label"
              option-value="value"
              emit-value
              map-options />
          </div>
          <div class="col-7">
            <q-input
              v-bind="getErrorAttrs('phone')"
              v-model="data.phone"
              outlined
              label="Телефон*"
              mask="(###) ###-##-##"
              borderless
              @blur="handleBlur('email')" />
          </div>
        </div>

        <q-row class="q-mt-md">
          <q-col>
            <q-input
              v-bind="getErrorAttrs('password')"
              v-model="data.password"
              outlined
              label="Пароль*"
              aria-autocomplete="current-password"
              :type="isPwd ? 'password' : 'text'"
              @blur="handleBlur('password')">
              <template #append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd" />
              </template>
            </q-input>
          </q-col>
        </q-row>
      </q-form>
      <div class="row no-wrap q-mt-md q-mb-md">
        <q-btn label="Войти" :disable="!isValid" class="q-btn--form" color="accent" @click="handleLogin" />
      </div>

      <div class="row no-wrap q-mt-md q-mb-md refresh-password__text" @click="showModalForgotPassword = true">
        <span>Восстановить пароль</span>
      </div>
    </div>
    <ForgotPasswordModal v-if="showModalForgotPassword" @close="showModalForgotPassword = false" />
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.login-form__container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  width: 350px;
  color: var(--text-color);
  border-radius: var(--border-radius);
}

.logo {
  width: 116px;
  height: 47px;
  margin-bottom: 20px;
}

.refresh-password__text:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
