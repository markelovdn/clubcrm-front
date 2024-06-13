<script setup lang="ts">
defineProps<{
  header?: string;
  subHeader?: string;
  isLoaded: boolean;
}>();
</script>

<template>
  <div v-show="isLoaded" class="absolute-center">
    <q-spinner-cube color="primary" size="2em" />
  </div>
  <div v-show="!isLoaded" class="page-wrapper">
    <h1 v-if="header" class="page-header">
      {{ header }}
    </h1>
    <div v-if="subHeader" class="sub-header">
      <span>{{ subHeader }}</span>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.page-header {
  margin: 0px 0px 24px 0px;
  padding: 0;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
}
</style>
