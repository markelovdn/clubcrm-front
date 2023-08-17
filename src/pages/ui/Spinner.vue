<template>
  <h1 class="heading-1">Spinner</h1>
  <BaseButton
  label="load spinner"
  @click="showSpinner = !showSpinner"/>
  <BaseSpinner v-if="showSpinner"/>
</template>

<script setup>
import BaseSpinner from '@/components/ui/BaseSpinner.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

import { ref } from 'vue';

const showSpinner = ref(false)

</script>

