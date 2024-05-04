<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import ModalWrapper from "@/components/ModalWrapper/ModalWrapper.vue";
import { useModal } from "@/hooks/useModal";
import { emailValidator, requiredValidator, useValidation } from "@/hooks/useValidation";
import { useAuthStore } from "@/stores/authStore";

import { TForgotPasswordPayload } from "./types";

const props = defineProps<{ email?: string }>();

const emit = defineEmits(["close", "close-common-modal", "validation-change"]);
const router = useRouter();

const data = ref<TForgotPasswordPayload>({
  email: "",
});

const { closeModal } = useModal(emit, data);
const authStore = useAuthStore();

const onForgotSuccess = () => {
  closeModal({ force: true });
  router.push({ name: "Login" });
};

const { handleBlur, getErrorAttrs, isValid } = useValidation<TForgotPasswordPayload>(data, emit, {
  email: {
    requiredValidator,
    emailValidator,
  },
});

const handleForgotPassword = () => {
  authStore.forgotPassword({ email: data.value.email }).then(onForgotSuccess);
};

onMounted(() => {
  if (props.email) {
    data.value.email = props.email;
  }
});
</script>

<template>
  <ModalWrapper close-button-header @close="closeModal({ force: true })">
    <p>Новый пароль будет выслан на почту</p>
    <q-form class="q-mb-sm" @keydown.enter="handleForgotPassword">
      <q-input
        v-bind="getErrorAttrs('email')"
        v-model="data.email"
        outlined
        class="q-mb-sm"
        label="Почта*"
        borderless
        @blur="handleBlur('email')" />
    </q-form>
    <div>
      <q-btn label="Отправить" :disable="!isValid" class="full-width" color="primary" @click="handleForgotPassword" />
    </div>
  </ModalWrapper>
</template>

<style lang="scss" scoped></style>
