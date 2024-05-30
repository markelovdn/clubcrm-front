<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import { TRegistrationPayload } from "@/api/Auth/types";
import logoUrl from "@/assets/img/logo_lt_legion34.png";
import { messages } from "@/common/messages";
import { emailValidator, minLengthValidator, requiredValidator, useValidation } from "@/hooks/useValidation";
import { useAuthStore } from "@/stores/authStore";
import { useBaseStore } from "@/stores/baseStore";
import notify from "@/utils/notify";

const data = ref<TRegistrationPayload>({
  phone: "",
  email: "",
  subDomain: "",
});

const baseStore = useBaseStore();

const emit = defineEmits(["close", "validation-change"]);

const { handleBlur, getErrorAttrs, isValid } = useValidation<TRegistrationPayload>(data, emit, {
  phone: { requiredValidator, minLengthValidator: minLengthValidator(18) },
  email: { requiredValidator, emailValidator },
  subDomain: { requiredValidator },
});

const router = useRouter();
const authStore = useAuthStore();
const isRegistrationError = ref(false);

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

const onRegistrationSuccess = () => {
  router.push({ name: "Main" });
  notify({ type: "positive", message: messages.registrationSuccess, position: "top" });
};

const handleRegistration = async () => {
  await authStore
    .registration(data.value)
    .then(onRegistrationSuccess)
    .catch(() => {
      isRegistrationError.value = true;
    });
};

onMounted(() => {
  const hostname = window.location.hostname;
  const parts = hostname.split(".");
  if (parts.length >= 3) {
    data.value.subDomain = parts[0];
  } else {
    data.value.subDomain = "null";
  }
});
</script>

<template>
  <div class="main-container absolute-center">
    <div class="login-form__container">
      <q-img class="logo" :src="logoUrl" fit="contain" height="100px" />
      <q-form class="q-mb-sm" @keydown.enter="handleRegistration" @submit.prevent="handleRegistration">
        <q-input
          v-bind="getErrorAttrs('phone')"
          v-model="phoneInput"
          outlined
          label="Телефон*"
          mask="+7 (###) ###-##-##"
          borderless
          @blur="handleBlur('phone')" />

        <q-input
          v-bind="getErrorAttrs('email')"
          v-model="data.email"
          outlined
          label="Email*"
          borderless
          @blur="handleBlur('email')" />
      </q-form>
      <div class="row no-wrap q-mt-md q-mb-md">
        <q-btn
          :label="baseStore.isLoading ? '' : 'Зарегистрироваться'"
          :disable="!isValid"
          class="register-btn"
          :loading="baseStore.isLoading"
          @click="handleRegistration">
          <template #loading>
            <q-spinner-dots color="white" size="2em" />
          </template>
        </q-btn>
      </div>

      <div class="row no-wrap q-mt-md q-mb-md">
        <q-btn
          v-if="isRegistrationError"
          label="Войти"
          flat
          class="q-btn--form"
          @click="router.push({ name: 'Login' })" />
      </div>
    </div>
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

.register-btn {
  min-width: 201px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: var(--primary);
}
</style>
