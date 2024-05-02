<script setup lang="ts">
import { ref } from "vue";

import RightSidebar from "@/components/common/RightSidebar/RightSidebar.vue";
import TheFooter from "@/components/common/TheFooter/TheFooter.vue";
import TheHeader from "@/components/common/TheHeader/TheHeader.vue";

const rightDrawerOpen = ref(false);
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <TheHeader @toggle-sidebar="toggleRightDrawer" />
    <RightSidebar
      :right-drawer-open="rightDrawerOpen"
      @update:right-drawer-open="rightDrawerOpen = $event"
      @click="rightDrawerOpen = false" />

    <q-page-container class="wrapper">
      <div class="wrapper__content">
        <router-view />
      </div>
    </q-page-container>

    <TheFooter @toggle-sidebar="toggleRightDrawer" />
  </q-layout>
</template>

<style lang="scss" scoped>
.wrapper {
  overflow-x: hidden;

  &__content {
    padding: 20px 20px 20px 20px;
    @media (max-width: 1270px) {
      width: 100%;
    }

    @media screen and (max-width: 970px) {
      width: 100%;
      padding: 20px 4px 0px 10px;
      overflow-x: hidden;
    }
  }
}

.scroll-top__btn {
  border-radius: 50px;
  opacity: 0.6;
}
</style>
