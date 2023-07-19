<template>
<InputComponent type="text" placeholder="Name"/>
<ButtonComponent class="primary">Кнопка</ButtonComponent>
</template>

<script setup>
import InputComponent from "@/components/ui/InputComponent.vue";
import ButtonComponent from "@/components/ui/ButtonComponent.vue";
import TogleComponent from "@/components/ui/TogleComponent.vue";

import { reactive } from "vue";
import { storeToRefs } from  'pinia'

import { useAuthStore } from '@/store/auth.js'

const authStore = useAuthStore()
const { count } = storeToRefs(authStore)
const { name } = storeToRefs(authStore)
</script>

<style scoped lang="scss">

</style>
