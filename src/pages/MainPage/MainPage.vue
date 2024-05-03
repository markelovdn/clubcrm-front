<script setup lang="ts">
import { onMounted, watchEffect } from "vue";

import { useAuthStore } from "@/stores/authStore";

const { user, requestUserInfo } = useAuthStore();

watchEffect(() => {
  console.log("Текущее значение user:", user);
});

onMounted(async () => {
  console.log("Компонент смонтирован");
  console.log("Текущее значение user:", user); // Используйте user.value
  if (user === null) {
    // Проверьте user.value на null
    console.log("Запрос начал выполняться");
    await requestUserInfo().then(() => {
      console.log("Текущее значение user:", user);
    });
  }
});
</script>

<template>
  <div class="main-container">
    <div v-if="user">{{ user }}</div>
  </div>
  <RouterLink to="/ui">UI</RouterLink>
  <q-btn label="Alert" color="primary" @click="requestUserInfo()" />
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
