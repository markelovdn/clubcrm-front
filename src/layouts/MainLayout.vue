<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const rightDrawerOpen = ref(false);
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};

const showHeaderOnRoute = computed(() => route.meta.header);
const showFooterOnRoute = computed(() => route.meta.footer);
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header v-if="showHeaderOnRoute !== false" reveal elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar square>
            <q-img src="@/assets/img/logo_1.png" />
          </q-avatar>
          СК Легион
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay behavior="mobile" elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container class="wrapper">
      <div class="wrapper__content">
        <router-view />
      </div>
    </q-page-container>

    <q-footer v-if="showFooterOnRoute !== false" reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title></q-toolbar-title>
      </q-toolbar>
    </q-footer>
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
