<template>
  <h1 class="heading-1">Notification</h1>

  <BaseButton
  @click="showNotification = !showNotification"
  label="ShowNotification" />
<div :class="['notification-container', {show: showNotification}]">
  <BaseNotification 
      v-if="showNotification"
      text="danger"
      color="danger"
      @close="showNotification = !showNotification"/>
</div>
<div :class="['notification-container', {show: showNotification}]">
  <BaseNotification 
      v-if="showNotification"
      text="success"
      color="success"
      @close="showNotification = !showNotification"/>
</div>
<div :class="['notification-container', {show: showNotification}]">
  <BaseNotification 
      v-if="showNotification"
      text="warning"
      color="warning"
      @close="showNotification = !showNotification"/>
</div>
<div :class="['notification-container', {show: showNotification}]">
  <BaseNotification 
      v-if="showNotification"
      text="Default"
      @close="showNotification = !showNotification"/>
</div>
</template>

<script setup>
import { ref } from 'vue';
import BaseNotification from '../components/ui/BaseNotification.vue';
import BaseButton from '../components/ui/BaseButton.vue';

const showNotification = ref(false)

</script>

<style scoped lang="scss">
.notification-container {
    opacity: 0;
    transition: 2s;
    margin-bottom: 1px;
    &.show {
      opacity: 1;
      transition: 1s;
  }
}

</style>
