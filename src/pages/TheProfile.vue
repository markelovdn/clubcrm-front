<script lang="ts" setup>
import { onMounted } from 'vue'
import { useAuthStore } from '../store/auth';

const authStore = useAuthStore()

// const getUser = computed(() => {
//   return authStore.getUser;
// });

onMounted(() => {
  console.log(authStore.user)
  console.log(authStore.getUser)
});

// path: src/views/Profile.vue
</script>

<template>
  <div class="text-center">
      <h1>Hello, this my profile page</h1>

      <router-link to="/">Go To Home</router-link>

      <div>User: {{ authStore.getUser }}</div>
      <div>User: {{ authStore.user }}</div>
  </div>
</template>