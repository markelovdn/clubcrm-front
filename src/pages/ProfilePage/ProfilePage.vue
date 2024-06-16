<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import { TUserPayload } from "@/api/User/types";
import PageWrapper from "@/components/PageWrapper/PageWrapper.vue";
import ProfileForm from "@/components/UserComponents/Forms/ProfileForm.vue";
import ProfileCard from "@/components/UserComponents/ProfileCard.vue";
import { useBaseStore } from "@/stores/baseStore";
import { useCollectionsStore } from "@/stores/collectionsStore";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();
const baseStore = useBaseStore();
const collectionsStore = useCollectionsStore();
const isEditProfile = ref(false);

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
const userRoles = computed(
  () =>
    userStore.user?.roles.map((userRole) => {
      return { title: userRole.title };
    }) ?? [],
);

const updateProfile = () => {
  if (userStore.hasRole("any")) {
    userStore.updateProfile(data.value);
  } else {
    userStore.setProfile(data.value);
  }
  isEditProfile.value = false;
};

onMounted(async () => {
  baseStore.isLoading = true;
  await collectionsStore.requestRoles();
  baseStore.isLoading = false;
});
</script>

<template>
  <PageWrapper :is-loaded="baseStore.isLoading">
    <q-card class="q-mb-sm tabs-wrapper">
      <q-tabs
        v-model="tab"
        dense
        class="bg-grey-2 text-grey-7"
        active-color="primary"
        indicator-color="primary"
        align="justify">
        <q-tab name="myData" label="Личные данные" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated class="accent text-color">
        <q-tab-panel name="myData">
          <ProfileCard
            v-if="!isEditProfile"
            :data="data"
            :has-role="userStore.hasRole('any')"
            :roles="userRoles"
            @edit-profile="isEditProfile = true" />

          <ProfileForm
            v-if="isEditProfile"
            :data="data"
            :is-edit="true"
            :has-role="userStore.hasRole('any')"
            :roles="optionsRoles"
            @update-profile="updateProfile"
            @cancel-edit="isEditProfile = false" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </PageWrapper>
</template>

<style lang="scss" scoped>
.tabs-wrapper {
  border-radius: var(--border-radius);
}
</style>
