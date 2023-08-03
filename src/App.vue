<template>
  <div class="container">
    <div class="sidebar-toggle" @click="toggleMenu">&#5125;</div>
    <layout-header />
    <layout-sidebar :openSidebar="isOpenMenu" />
    <div :class="['content', { content_full: !isOpenMenu }]">
      <router-view />
    </div>
  </div>
</template>

<script setup>
  import LayoutHeader from "@/components/layouts/Header.vue"
  import LayoutSidebar from "@/components/layouts/Sidebar.vue"
  import { ref } from "vue";

  const isOpenMenu = ref(false);

  const toggleMenu = () => {
    isOpenMenu.value = !isOpenMenu.value;
  };
</script>

<style lang="scss">
//.app {
//  height: 100vh;
//  display: flex;
//  justify-content: center;
//  align-items: center;
//}

.content {
  max-width: 100%;
  margin-left: 250px;
  padding: 30px;
  transition: 0.2s;
  &_full {
    margin-left: 0;
  }
}

.sidebar-toggle {
  position: fixed;
  left: 0;
  width: 15px;
  background: $color_primary;
  height: 100%;
  top: 62px;
  z-index: 1;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 100%) {
  .content {
    margin-left: 0;
  }
}
</style>