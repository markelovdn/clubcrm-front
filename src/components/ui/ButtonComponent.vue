<template>
  <button
      type="button"
      :class="'button-' + props.class">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps(
    [
        'class'
    ])
</script>

<style scoped lang="scss">
%button-base {
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  width: 100%;
  margin: 5px;
  color: $color_white;
  text-align: center;
  padding: 15px 15px;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
}

.button-primary {
  @extend %button-base;
  background: $color_primary;
}

.button-danger {
  @extend %button-base;
  background: $color_danger;
}

.button-success {
  @extend %button-base;
  background: $color_success;
}

.button-warning {
  @extend %button-base;
  background: $color_warning;
}
</style>