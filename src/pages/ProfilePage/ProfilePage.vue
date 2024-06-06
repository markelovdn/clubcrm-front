<script setup lang="ts">
import { computed, ref } from "vue";

import { TUserPayload } from "@/api/User/types";
import PageWrapper from "@/components/PageWrapper/PageWrapper.vue";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();

const data = ref<TUserPayload>({
  id: userStore.user?.id || 0,
  firstName: userStore.user?.firstName || "",
  secondName: userStore.user?.secondName || "",
  middleName: userStore.user?.middleName || "",
  phone: userStore.user?.phone || "",
  email: userStore.user?.email || "",
  dateBirthday: userStore.user?.dateBirthday || "",
  rolesId: userStore.user?.roles.map((userRole) => userRole.id) ?? [],
});

const optionsRolesFiltered = computed(() => {
  return (
    userStore.user?.roles.map((role) => ({
      label: role.title,
      value: role.id,
    })) || []
  );
});

const updateProfile = () => {
  console.log(123);
};
</script>

<template>
  <PageWrapper header="Профиль" back-link="Main">
    <q-form class="q-mb-sm" @keydown.enter.prevent="updateProfile">
      <q-select
        v-model="data.rolesId"
        class="q-mb-sm"
        label="Выберите роль"
        multiple
        use-chips
        outlined
        :options="optionsRolesFiltered"
        option-label="label"
        option-value="value"
        emit-value
        map-options
        input-debounce="500" />
      <q-input v-model="data.secondName" outlined label="Фамилия" borderless class="q-mb-sm" />
      <q-input v-model="data.firstName" outlined label="Имя" borderless class="q-mb-sm" />
      <q-input v-model="data.middleName" outlined label="Отчество" borderless class="q-mb-sm" />
      <q-input v-model="data.dateBirthday" outlined label="Дата рождения" borderless class="q-mb-sm" mask="##.##.####">
        <template #append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-date v-model="data.dateBirthday" mask="DD.MM.YYYY">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Закрыть" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-input v-model="data.phone" outlined label="Телефон" borderless class="q-mb-sm" mask="+7 (###) ###-##-##" />
      <q-input v-model="data.email" outlined label="Email" borderless class="q-mb-sm" />
    </q-form>
  </PageWrapper>
</template>

<style scoped></style>
