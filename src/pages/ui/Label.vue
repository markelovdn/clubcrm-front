<template>
  <h1 class="heading-1">Label</h1>
  <div class="label">
    <BaseLabel text="Primary" color="primary"/>
  </div>
  <div class="label">
    <BaseLabel text="Secondary" color="secondary"/>
  </div> 
  <div class="label">
    <BaseLabel text="Danger" color="danger"/>
  </div>
  <div class="label">
    <BaseLabel text="Warning" color="warning"/>
  </div>
  <div class="label">
    <BaseLabel text="Success" color="success"/>
  </div>
</template>

<script setup>
import BaseLabel from '../components/ui/BaseLabel.vue'
</script>

<style scoped lang="scss">
.label {
  display: block;
  margin-bottom: 20px;
}
</style>