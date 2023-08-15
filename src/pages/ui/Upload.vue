<template>
  <h1 class="heading-1">Upload</h1>
  <BaseUpload 
  icon="cloud-arrow-up"
  label="Загрузить фото"
  multiple
  landscape
  @uploadedFiles="(file) => uploadedFiles = file"/>
</template>

<script setup>
import { ref } from 'vue'
import BaseUpload from '@/components/ui/BaseUpload.vue';

const uploadedFiles = ref({})
</script>