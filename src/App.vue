<template>
  <div>
    <span>{{count}}</span>
    <span>{{name}}</span>
    <button @click="authStore.increment"></button>

  </div>

</template>

<script setup>
import { useAuthStore } from '@/store/auth.js'
import { storeToRefs} from  'pinia'
const authStore = useAuthStore()
const { count } = storeToRefs(authStore)
const { name } = storeToRefs(authStore)

</script>

<style scoped lang="scss">

</style>
