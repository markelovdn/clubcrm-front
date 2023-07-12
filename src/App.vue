<template>
<AuthLayout>
  <!--      <router-view></router-view>-->
</AuthLayout>

</template>

<script setup>
import AuthLayout from "@/components/layouts/auth-layout/AuthLayout.vue";
import { useAuthStore } from '@/store/auth.js'
import { storeToRefs} from  'pinia'
import {reactive} from "vue";

const authStore = reactive(useAuthStore())
const { count } = storeToRefs(authStore)

</script>

<style scoped lang="scss">

</style>
