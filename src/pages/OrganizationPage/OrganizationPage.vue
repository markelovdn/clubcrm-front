<script setup lang="ts">
import PageWrapper from "@/components/PageWrapper/PageWrapper.vue";
import { useBaseStore } from "@/stores/baseStore";

const baseStore = useBaseStore();
</script>

<template>
  <PageWrapper header="Организации" :is-loaded="baseStore.isLoading">Организации</PageWrapper>
</template>

<style scoped></style>
