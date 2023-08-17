<template>
      <div class="base-notification" key="base">
    <span :class="['base-notification__text', color]" key="text">
        {{ text }}
  </span>
    <i class="base-notification__icon"
    @click="emit('close')" key="icon">
      <font-awesome-icon icon="xmark" key="icon2"/>
    </i>
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
    default: "5000"
  }
})

const delay = (delay) => {
  setTimeout(() => emit('close'), delay)
}
</script>



<style scoped lang="scss">
.base-notification {
  display: flex;
  justify-content: space-around;
  position: relative;
  width: 300px;
  padding: 10px 20px;
  border-radius: 6px;
  background-color: $color_secondary_300;
  top: -210px;

  &__text {
    width: 100%;
    word-wrap: break-word;

    &.danger {
      color: $color_danger_600;
    }

    &.warning {
      color: $color_warning_600;
    }

    &.success {
      color: $color_success_600;
    }

    &.default {
      color: black;
    }
  }

  &__icon {
    cursor: pointer;
    align-self: flex-start;
  }
}
</style>