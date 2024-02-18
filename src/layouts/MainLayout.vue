<script setup lang="ts">
import { getCssVar } from "quasar";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

import IconCommunity from "@/components/icons/IconCommunity.vue";
import IconDocumentation from "@/components/icons/IconDocumentation.vue";

const route = useRoute();
const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};

const pageBackground = computed(() => {
  const backgroundName = (route?.meta?.background ?? "secondary") as string;
  return { background: getCssVar(`background-${backgroundName}`) };
});
</script>

<template>
  <q-layout view="lHr lpr fFf">
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

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" elevated>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, eveniet molestias assumenda magni repellat hic sed
      repudiandae incidunt quo amet autem fuga eaque maxime repellendus beatae accusamus culpa id nesciunt.
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" elevated>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, excepturi culpa blanditiis ipsam exercitationem hic
      vero ullam nam vel delectus assumenda minima consequatur dignissimos ab laudantium odio quis. Eligendi, totam.
    </q-drawer>

    <q-page-container class="wrapper" :style="pageBackground">
      <q-page class="wrapper__content">
        <router-view />
      </q-page>
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <icon-community class="q-mr-sm" />
          <icon-documentation class="q-mr-sm" />
        </q-toolbar-title>
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
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
