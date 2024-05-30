<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import logoUrl from "@/assets/img/logo_lt_legion34.png";
import ForgotPasswordModal from "@/components/Modals/ForgotPasswordModal/ForgotPasswordModal.vue";
import { requiredValidator, useValidation } from "@/hooks/useValidation";
import { useAuthStore } from "@/stores/authStore";
import { useBaseStore } from "@/stores/baseStore";

import { TLoginPayload } from "./types";

const data = ref<TLoginPayload>({
  phone: "",
  password: "",
});

const emit = defineEmits(["close", "validation-change"]);

const { handleBlur, getErrorAttrs, isValid } = useValidation<TLoginPayload>(data, emit, {
  phone: { requiredValidator },
  password: { requiredValidator },
});

const isPwd = ref(true);
const showModalForgotPassword = ref(false);

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const baseStore = useBaseStore();
const showLoginError = ref(false);

const phoneInput = computed({
  get() {
    return data.value.phone;
  },
  set(newValue) {
    if (newValue[4] === "8") {
      newValue = "7";
    }
    data.value.phone = newValue;
  },
});

const onLoginSuccess = () => {
  router.push({ name: "Main", query: { ...route.query } });
};
const onLoginFail = () => (showLoginError.value = true);

const handleLogin = () => {
  authStore
    .login({
      phone: data.value.phone,
      password: data.value.password,
    })
    .then(onLoginSuccess, onLoginFail);
};

const registration = () => {
  router.push({ name: "Registration" });
};
</script>

<template>
  <div class="main-container absolute-center">
    <div class="login-form__container">
      <q-img class="logo" :src="logoUrl" fit="contain" height="100px" />
      <q-form class="q-mb-sm" @keydown.enter="handleLogin" @submit.prevent="handleLogin">
        <q-input
          v-bind="getErrorAttrs('phone')"
          v-model="phoneInput"
          outlined
          label="Телефон*"
          mask="+7 (###) ###-##-##"
          borderless
          @blur="handleBlur('phone')" />

        <q-input
          v-bind="getErrorAttrs('password')"
          v-model="data.password"
          outlined
          label="Пароль*"
          aria-autocomplete="current-password"
          :type="isPwd ? 'password' : 'text'"
          @blur="handleBlur('password')">
          <template #append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
          </template>
        </q-input>
      </q-form>
      <div class="row no-wrap q-mt-md q-mb-md">
        <q-btn
          label="Войти"
          :disable="!isValid"
          class="q-btn--form"
          color="primary"
          :loading="baseStore.isLoading"
          @click="handleLogin">
          <template #loading>
            <q-spinner-dots color="white" size="2em" />
          </template>
        </q-btn>
      </div>

      <q-btn label="Не помню логин или пароль?" flat class="q-mt-md" @click="showModalForgotPassword = true"></q-btn>
      <q-btn label="Зарегистрироваться" flat class="q-mt-md" @click="registration"></q-btn>
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
