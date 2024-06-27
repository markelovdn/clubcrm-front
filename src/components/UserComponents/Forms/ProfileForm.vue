<script setup lang="ts">
import { defineProps, ref } from "vue";

import { TUserPayload } from "@/api/User/types";

const props = defineProps({
  isEdit: Boolean,
  data: {
    type: Object as () => TUserPayload,
    default: () => ({}),
  },
  hasRole: Boolean,
  roles: {
    type: Array as () => { label: string; value: number }[],
    default: () => [],
  },
});

const emit = defineEmits(["updateProfile", "validation-change", "cancel-edit"]);

const formData = ref<TUserPayload>(props.data);
</script>

<template>
  <q-form class="q-mb-sm profile-form" @keydown.enter.prevent="emit('updateProfile')">
    <q-select
      v-if="!props.hasRole"
      v-model="formData.rolesId"
      class="q-mb-sm"
      label="Выберите роль"
      outlined
      :options="roles"
      option-label="label"
      option-value="value"
      emit-value
      map-options
      input-debounce="500" />
    <q-input v-model="formData.secondName" outlined label="Фамилия" borderless class="q-mb-sm" />
    <q-input v-model="formData.firstName" outlined label="Имя" borderless class="q-mb-sm" />
    <q-input v-model="formData.middleName" outlined label="Отчество" borderless class="q-mb-sm" />
    <q-input
      v-model="formData.dateBirthday"
      outlined
      label="Дата рождения"
      borderless
      class="q-mb-sm"
      mask="##.##.####">
      <template #append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="formData.dateBirthday" mask="DD.MM.YYYY">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Закрыть" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    <q-input v-model="formData.phone" outlined label="Телефон" borderless class="q-mb-sm" mask="+7 (###) ###-##-##" />
    <q-input v-model="formData.email" outlined label="Email" borderless class="q-mb-sm" />
    <div class="row no-wrap justify-between">
      <q-btn label="Сохранить" class="q-mt-md" color="primary" @click="emit('updateProfile')" />
      <q-btn label="Отменить" class="q-mt-md" color="grey" @click="emit('cancel-edit')"></q-btn>
    </div>
  </q-form>
</template>
<style lang="scss" scoped>
.profile-form {
  max-width: 500px;
}
</style>
