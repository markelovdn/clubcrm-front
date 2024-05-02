<script setup lang="ts">
import { onMounted, ref } from "vue";

import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();
const testServer = ref<string>("");

authStore.test().then((res) => (testServer.value = res.message));

const fullURL = ref("");

onMounted(() => {
  fullURL.value = window.location.href;
  authStore.requestUserInfo();
});
</script>

<template>
  <div class="main-container">
    {{ testServer }}
    {{ fullURL }}
    {{ authStore.user }}
  </div>
  <RouterLink to="/ui">UI</RouterLink>
</template>

<style scoped>
.my-sticky-header-column-table {
  height: 310px;
  max-width: 600px;
  td:first-child {
    background-color: #00b4ff;
  }

  tr th {
    position: sticky;
    z-index: 2;
    background: #00b4ff;
  }

  thead tr:last-child th {
    top: 48px;
    z-index: 3;
  }

  thead tr:first-child th {
    top: 0;
    z-index: 1;
  }

  tr:first-child th:first-child {
    z-index: 3;
  }

  td:first-child {
    z-index: 1;
  }

  td:first-child,
  th:first-child {
    position: sticky;
    left: 0;
  }

  tbody {
    scroll-margin-top: 48px;
  }
}
</style>
