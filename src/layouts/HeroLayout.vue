<script lang="ts">
// Path: src\layouts\HeroLayout.vue

import { defineComponent } from "vue";

export default defineComponent({
    name: "HeroLayout",
});
</script>

<template>
  <div>
    <span class="hero-container">
    HeroLayouyHeader
  </span>
  <slot></slot>
  <span class="hero-container">
    HeroLayouyFooter
  </span>
</div>
  
</template>

<style scoped lang="scss">
.hero-container {
  display: flex;
  position: absolute;
  z-index: -1;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: $color-primary;
}
</style>
