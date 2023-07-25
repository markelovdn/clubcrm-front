<template>
  <PrimaryButton class="primary" theme="blue">Кнопка</PrimaryButton>
  <p>Просто текст</p>
</template>

<script setup>
import PrimaryButton from "@/components/ui/PrimaryButton.vue";

import { reactive } from "vue";
import { storeToRefs } from  'pinia'

import { useAuthStore } from '@/store/auth.js'

const authStore = useAuthStore()
const { count } = storeToRefs(authStore)
const { name } = storeToRefs(authStore)
</script>

<style>
body {
  background-color: red;
}
</style>
