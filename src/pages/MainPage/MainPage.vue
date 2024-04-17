<script setup lang="ts">
import { onMounted, ref } from "vue";

import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();
const testServer = ref<string>("");

authStore.test().then((res) => (testServer.value = res.message));

const fullURL = ref("");

onMounted(() => {
  fullURL.value = window.location.href;
});
</script>

<template>
  <div class="main-container">
    {{ testServer }}
    {{ fullURL }}
  </div>
</template>

<style scoped></style>
