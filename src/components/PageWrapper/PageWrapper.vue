<script setup lang="ts">
defineProps<{
  header?: string;
  subHeader?: string;
  backLink?: string;
}>();
</script>

<template>
  <div class="main-container">
    <header v-if="header">
      <h1>
        {{ header }}
        <router-link v-if="backLink" :to="{ name: backLink }">
          <q-icon name="chevron_left" color="grey" size="lg" />
        </router-link>
      </h1>
    </header>
    <div v-if="subHeader" class="sub-header">
      <span>{{ subHeader }}</span>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  max-width: 500px;
}
</style>
