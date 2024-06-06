<script setup lang="ts">
import MainLayout from "./layouts/MainLayout.vue";
import { useUserStore } from "./stores/userStore";

const userStore = useUserStore();

userStore.requestUserInfo();
</script>

<template>
  <MainLayout />
</template>

<style scoped></style>
