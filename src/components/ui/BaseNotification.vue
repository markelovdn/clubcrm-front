<template>
  <div class="container">
    <div :class="['base-notification', color]">
    <span :class="['base-notification__text', color]">
        {{ text }}
  </span>
    <i class="base-notification__icon"
    @click="emit('close')">
      <font-awesome-icon icon="xmark"/>
    </i>
    </div>
  </div>

    
{{ delay(props.delay) }}
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['close'])
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: false,
    default: 'default'
  }, 
  delay: {
    type: String,
    required: false,
    default: "60000"
  }
})

const delay = (delay) => {
  setTimeout(() => emit('close'), delay)
}
</script>

<style scoped lang="scss">
.container {
  z-index: 2;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: row-reverse;
  top: -210px;
}
.base-notification {
  display: flex;
  justify-content: space-around;
  width: 300px;
  padding: 10px 20px;
  border-radius: 6px;
  background-color: $color_secondary_300;
  

  &.danger {
      color: white;
      background-color: $color_danger_600;
    }

  &.warning {
    background-color: $color_warning_400;
  }

  &.success {
    background-color: $color_success_400;
  }

  &.default {
    color: black;
  }  

  &__text {
    width: 100%;
    word-wrap: break-word;
  }

  &__icon {
    cursor: pointer;
    align-self: flex-start;
  }
}
</style>