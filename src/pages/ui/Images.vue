<template>
  <h1 class="heading-1">Images</h1>
  <BaseImages 
  src="src/assets/img/demo/300X300.png"
  size="xs"
  rounded
  @click="ShowImage('src/assets/img/demo/300X300.png')"/>

  <BaseImages
  v-for="image in images" :key="image.id" 
  :src="image.src"
  size="s"
  @click="ShowImage(image.src)"/>

  <BaseLightbox 
  v-if="ShowLightbox"
  :src="imageItem"
  @close="ShowLightbox = !ShowLightbox"
  />
</template>

<script setup>
import { ref } from 'vue'
import BaseImages from '../../components/ui/BaseImages.vue';
import BaseLightbox from '../../components/ui/BaseLightbox.vue';


const ShowLightbox = ref(false);
const imageItem = ref('')

const ShowImage = (src) => {
  imageItem.value = src
  ShowLightbox.value = true
}

const images = ref([
  {id: 1, src: 'src/assets/img/demo/150X150.png'},
  {id: 2, src: 'src/assets/img/demo/300X300.png'},
  {id: 3, src: 'src/assets/img/demo/1200X400.png'}
])
</script>