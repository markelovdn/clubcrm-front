<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import { repeatPasswordValidator, requiredValidator, useValidation } from "@/hooks/useValidation";
import { useAuthStore } from "@/stores/authStore";
import { useBaseStore } from "@/stores/baseStore";

import { TResetPasswordPayload } from "./types";

const emit = defineEmits(["close", "validation-change"]);
const router = useRouter();
const route = useRoute();
const data = ref<TResetPasswordPayload>({
  password: "",
  passwordConfirm: "",
  resetToken: route.params.resetToken as string,
});

const authStore = useAuthStore();
const baseStore = useBaseStore();
const isPwd = ref(true);

const { handleBlur, getErrorAttrs, isValid } = useValidation<TResetPasswordPayload>(data, emit, {
  password: { requiredValidator },
  passwordConfirm: { repeatPasswordValidator: repeatPasswordValidator(computed(() => data.value.password)) },
  resetToken: { requiredValidator },
});

const handleResetPassword = () => {
  authStore
    .resetPassword({ password: data.value.password, resetToken: data.value.resetToken })
    .then(() => router.push({ name: "Main" }));
};
</script>

<template>
  <div class="main-container">
    <div class="password-reset__wrapper absolute-center">
      <q-form class="q-sm form" @keydown.enter.prevent="handleResetPassword">
        <q-input
          v-bind="getErrorAttrs('password')"
          v-model="data.password"
          outlined
          class="q-mb-sm"
          label="Новый пароль*"
          aria-autocomplete="new-password"
          :type="isPwd ? 'password' : 'text'"
          @blur="handleBlur('password')">
          <template #append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
          </template>
        </q-input>

        <q-input
          v-model="data.passwordConfirm"
          outlined
          class="q-mb-sm"
          label="Подтвердите пароль*"
          v-bind="getErrorAttrs('passwordConfirm')"
          aria-autocomplete="new-password"
          :type="isPwd ? 'password' : 'text'"
          @blur="handleBlur('passwordConfirm')">
          <template #append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
          </template>
        </q-input>
        <div class="q-mb-sm">
          <q-btn
            label="Изменить пароль"
            :disable="!isValid"
            class="full-width q-mt-md"
            color="primary"
            :loading="baseStore.isLoading"
            @click="handleResetPassword">
            <template #loading>
              <q-spinner-dots color="white" size="2em" />
            </template>
          </q-btn>
        </div>
      </q-form>
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

.password-reset__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  width: 350px;
  color: var(--text-color);
  border-radius: var(--border-radius);

  & .header {
    margin-bottom: 24px !important;
  }
}
</style>
