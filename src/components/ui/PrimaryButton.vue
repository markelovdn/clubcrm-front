<template>
  <button
      type="button"
      :class="['primary-button', `theme-${props.theme}`]"
      >
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  theme: {
    type: String,
    default: '',
    // validate: () => ['blue'].includes(this.theme)
  },
  size: {
    type: String,
    default: 'medium',
  }
})
</script>

<style scoped lang="scss">
.primary-button {
  border: 1px solid transparent;
  border-radius: 8px;
  width: 100%;
  text-align: center;
  cursor: pointer;

  &.theme-blue {
    //color: $color_default;
  }
}

.button-primary {
  //background: $color_primary;
  &:hover {
    box-shadow: 0px 3px 5px 0px rgba(50, 50, 93, 0.15), 0px 0px 1px 0px rgba(0, 0, 0, 0.02);

  }
}

.button-danger {
  //background: $color_danger;
}

.button-success {
  //background: $color_success;
}

.button-warning {
  //background: $color_warning;
}
</style>