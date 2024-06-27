<script setup lang="ts">
import { onMounted } from "vue";

import OrganizationCard from "@/components/OrganizationComponents/OrganizationCard.vue";
import PageWrapper from "@/components/PageWrapper/PageWrapper.vue";
import { useBaseStore } from "@/stores/baseStore";
// import { useOrganizationsStore } from "@/stores/organizationsStore";

const baseStore = useBaseStore();
// const organizationsStore = useOrganizationsStore();

onMounted(async () => {
  baseStore.isLoading = true;
  // await baseStore.requestOrganizations();
  baseStore.isLoading = false;
});
</script>

<template>
  <PageWrapper :is-loaded="baseStore.isLoading">
    <OrganizationCard />
  </PageWrapper>
</template>

<style scoped></style>
