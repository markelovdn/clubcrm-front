<template>
  <button
      :class="['base-button', `base-button__${color}`,
       {'base-button__rounded': rounded},
       {'base-button__outlined': outlined},
       {'base-button__icon': icon},
       {'base-button__icon': icon},
       {'base-button__large': size === 'large'}]"
      :disabled="disabled"
      @click="clickOnButton">
    <span>
      <font-awesome-icon :icon="`fa-${icon_option} fa-${icon}`" />
    </span>
    <span>{{ label }}</span>
  </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Button',
    required: false
  },
  color: {
   type: String,
   default: 'primary',
   required: false
  },
  disabled: {
    type: Boolean,
    required: false
  },
  rounded: {
    type: Boolean,
    required: false
  },
  outlined: {
    type: Boolean,
    required: false
  },
  icon: {
    type: String,
    required: false,
  },
  icon_option: {
    type: String,
    required: false,
    default: 'solid'
  },
  size: {
    type: String,
    default: 'normal'
  }
})

const emit = defineEmits(['click'])

const clickOnButton = () => {
  emit('click')
}
</script>

<style scoped lang="scss">
.base-button {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 20px;
  height: 40px;
  color: white;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  transition: .2s;
  &__primary {
    background: $color-primary;
    border: 1px solid $color-primary;
    &:enabled:hover {
      background: $color-primary_hover;
    }
  }
  &__secondary {
    background: $color-secondary_600;
    border: 1px solid $color-secondary_600;
    &:enabled:hover {
      background: $color-secondary_300;
    }
  }
  &__success {
    background: $color-success_600;
    border: 1px solid $color-success_600;
    &:enabled:hover {
      background: $color-success_400;
    }
  }
  &__info {
    background: $color-info_600;
    border: 1px solid $color-info_600;
    &:enabled:hover {
      background: $color-info_400;
    }
  }
  &__warning {
    color: black;
    background: $color-warning_600;
    border: 1px solid $color-warning_600;
    &:enabled:hover {
      color: black;
      background: $color-warning_400;
    }
  }
  &__danger {
    background: $color-danger_600;
    border: 1px solid $color-danger_600;
    &:enabled:hover {
      background: $color-danger_400;
    }
  }
  &:disabled {
    opacity: .6;
    cursor: default;
  }
  &__rounded {
    border-radius: 15px;
  }
  &__outlined {
    background: transparent;
    color: black;
    &:hover {
      color: white;
    }
  }
  &__icon {
    & span {
      padding: 2px;
    }
  }
  &__large {
    height: 48px;
    padding: 0 30px;
  }
}
</style>