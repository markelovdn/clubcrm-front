<template>
  <h1 class="heading-1">Notification</h1>

  <BaseButton
  @click="showNotification = !showNotification"
  label="ShowNotification" />

  <Transition>
    <p v-if="showNotification">asdasdasd</p>
  </Transition>

  <Transition>
    <div>
      <BaseNotification 
  v-if="showNotification"
  text="Text"
  color="danger"
  delay=2000
  @close="showNotification = !showNotification"
  key="notification"/>

    </div>
      </Transition>

</template>

<script setup>
import { ref } from 'vue';
import BaseNotification from '@/components/ui/BaseNotification.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

const showNotification = ref(false)

</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
