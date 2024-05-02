<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const emit = defineEmits(["toggleSidebar"]);
const showFooterOnRoute = computed(() => route.meta.footer);

const handleClick = () => {
  emit("toggleSidebar");
};
</script>

<template>
  <q-footer reveal elevated class="footer">
    <q-toolbar>
      <q-toolbar-title></q-toolbar-title>
      <q-btn dense flat round icon="menu" @click="handleClick" />
    </q-toolbar>
  </q-footer>
  <q-footer v-if="showFooterOnRoute !== false" reveal elevated class="bg-grey-8 text-white">
    <q-toolbar>
      <q-toolbar-title></q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<style lang="scss">
.footer {
  background: var(--background-card);
  color: var(--text-color);
  display: none;
}
</style>
