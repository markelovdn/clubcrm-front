<template>
  <div :class="['base-image', props.size, rounded]">
    <img :class="{rounded: rounded}" :src="src" alt="">
  </div>
  
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: false,
    default: 'full'
  },
  rounded: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<style scoped lang="scss">
.base-image {
  width: 100%;
    height: 100%;
    
  & img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: contain;
    
    &.rounded {
      border-radius: 50%;
    }
  }

  &.xs {
    width: 30px;
    height: 30px;
  }

  &.s {
    width: 50px;
    height: 50px;
  }

  &.m {
    width: 100px;
    height: 100px;
  }
  &.l {
    width: 150px;
    height: 150px;
  }
  &.xl {
    width: 300px;
    height: 300px;
  }

  &.full {
    width: 100%;
    height: 100%;
  }
}
</style>