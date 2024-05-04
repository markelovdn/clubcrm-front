<script setup lang="ts">
import { onMounted, ref } from "vue";

import { TUser } from "@/api/Auth/types";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();
const user = ref<TUser | null>(null);

onMounted(async () => {
  await authStore.requestUserInfo();
  user.value = authStore.user;
});
</script>

<template>
  <div class="main-container">
    <span v-if="!user?.id">Загрузка...</span>
    <div>{{ user }}</div>
  </div>
  <div>
    <RouterLink to="/ui">Страница UI элементов</RouterLink>
  </div>
  <q-btn label="Запрос данных пользователя" color="primary" @click="authStore.requestUserInfo()" />
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
