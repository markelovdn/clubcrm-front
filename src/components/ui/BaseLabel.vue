<template>
  <span :class="['base-label', color]">
    {{ text }}
  </span>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: false,
    default: 'primary'
  }
})
</script>
<style scoped lang="scss">
.base-label {
  background-color: $color-primary;
  color: white;
  padding: 2px 10px;
  border-radius: 4px;
}

.secondary {
  background-color: $color_secondary_600;
}

.danger {
    background-color: $color_danger_600;
  }

.warning {
  background-color: $color_warning_600;
  color: black
}

.success {
    background-color: $color_success_600;
  }  
</style>