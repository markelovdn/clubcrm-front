<script setup lang="ts">
import { getCssVar } from "quasar";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const pageBackground = computed(() => {
  const backgroundName = (route?.meta?.background ?? "secondary") as string;

  return { background: getCssVar(`background-${backgroundName}`) };
});
// const showHeaderOnRoute = computed(() => route.meta.footer);

const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay behavior="mobile" elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay behavior="mobile" elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container class="wrapper" :style="pageBackground">
      <q-page class="wrapper__content">
        <router-view />
      </q-page>
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style lang="scss" scoped>
.wrapper {
  overflow-x: hidden;

  &__content {
    width: var(--maxContentWidth);
    margin: 0 auto;
    padding: 70px 0;

    @media (max-width: 1270px) {
      width: 100%;
    }

    @media screen and (max-width: $mobile-max-width) {
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
