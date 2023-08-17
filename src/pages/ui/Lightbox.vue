<template>
  <h1 class="heading-1">Lightbox</h1>
  <BaseButton @click="ShowLightbox = !ShowLightbox" label="showModal"/>
  <BaseLightbox
  v-if="ShowLightbox"
  src="src/assets/img/demo/300X300.png"
  @close="ShowLightbox = !ShowLightbox">
    
  </BaseLightbox>
</template>

<script setup>
import { ref } from 'vue'
import BaseLightbox from '../../components/ui/BaseLightbox.vue';
import BaseButton from '../../components/ui/BaseButton.vue';

const ShowLightbox = ref(false)
</script>