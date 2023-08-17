<template>
  <div class="base-lightbox show">
    <div class="base-lightbox__header">
      <span @click="emit('close')">
              <font-awesome-icon icon="xmark" />
            </span>
    </div>

    <div class="base-lightbox__body">
      <BaseImages :src="src"/>
    </div>
    
  </div>
</template>

<script setup>
import BaseImages from './BaseImages.vue';
const emit = defineEmits(['close'])
const props = defineProps({
  src: {
    type: String,
    required: true,
    default: ''
  }
})
</script>

<style scoped lang="scss">
.base-lightbox {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1010;
  background: #000;
  opacity: 0;
  transition: opacity .5s linear;
  // touch-action: pinch-zoom;
  color: white;

  &.show {
    display: block;
    opacity: 1;
  }

  &__header {
    display: flex;
    align-items: end;
    justify-content: end;
    cursor: pointer;
    min-height: 50px;

    & span {
      align-self: flex-start;
      padding: 5px;
    }
  }

  &__body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    & img{
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>