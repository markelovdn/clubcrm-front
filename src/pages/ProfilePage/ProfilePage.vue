<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import { TUserPayload } from "@/api/User/types";
import PageWrapper from "@/components/PageWrapper/PageWrapper.vue";
import { useBaseStore } from "@/stores/baseStore";
import { useCollectionsStore } from "@/stores/collectionsStore";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();
const collectionsStore = useCollectionsStore();
const baseStore = useBaseStore();
const tab = ref("myData");

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

const optionsRoles = computed(() => collectionsStore.getRoles);

const updateProfile = () => {
  console.log(123);
};

onMounted(async () => {
  baseStore.isLoading = true;
  await collectionsStore.requestRoles();
  baseStore.isLoading = false;
});
</script>

<template>
  <PageWrapper :is-loaded="baseStore.isLoading">
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="bg-grey-2 text-grey-7"
        active-color="primary"
        indicator-color="primary"
        align="justify">
        <q-tab name="myData" label="Личные данные" />
        <q-tab name="myChildren" label="Мои дети" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated class="accent text-color">
        <q-tab-panel name="myData">
          <q-form class="q-mb-sm" @keydown.enter.prevent="updateProfile">
            <q-input v-model="data.secondName" outlined label="Фамилия" borderless class="q-mb-sm" />
            <q-input v-model="data.firstName" outlined label="Имя" borderless class="q-mb-sm" />
            <q-input v-model="data.middleName" outlined label="Отчество" borderless class="q-mb-sm" />
            <q-input
              v-model="data.dateBirthday"
              outlined
              label="Дата рождения"
              borderless
              class="q-mb-sm"
              mask="##.##.####">
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
            <q-input
              v-model="data.phone"
              outlined
              label="Телефон"
              borderless
              class="q-mb-sm"
              mask="+7 (###) ###-##-##" />
            <q-input v-model="data.email" outlined label="Email" borderless class="q-mb-sm" />
            <q-select
              v-if="!userStore.hasRole('any')"
              v-model="data.rolesId"
              class="q-mb-sm"
              label="Кто вы?"
              outlined
              :options="optionsRoles"
              option-label="label"
              option-value="value"
              emit-value
              map-options
              input-debounce="500" />
            <div class="row no-wrap justify-between">
              <q-btn label="Сохранить" class="q-mt-md" color="primary" @click="updateProfile"></q-btn>
              <q-btn label="Отменить" class="q-mt-md" color="grey" :to="{ name: 'Main' }"></q-btn>
            </div>
          </q-form>
        </q-tab-panel>
        <q-tab-panel name="myChildren"></q-tab-panel>

        <q-tab-panel name="other">
          <div class="text-h6">Другие найстроки проектов</div>
          Здесь могут располагаться другие настройки проектов
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </PageWrapper>
</template>

<style scoped></style>
