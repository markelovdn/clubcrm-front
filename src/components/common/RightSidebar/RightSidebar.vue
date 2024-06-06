<script setup lang="ts">
import { defineEmits, defineProps } from "vue";
import { useRouter } from "vue-router";

import RightMenu from "@/components/RightMenu/RightMenu.vue";
import { useAuthStore } from "@/stores/authStore";

const router = useRouter();
const authStore = useAuthStore();

const props = defineProps({
  rightDrawerOpen: Boolean,
});

const logout = () => {
  authStore.logout();
  emit("update:rightDrawerOpen", false);
  router.push({ name: "Login" });
};

const emit = defineEmits(["update:rightDrawerOpen"]);

const handleModelValueUpdate = (newValue: boolean) => {
  emit("update:rightDrawerOpen", newValue);
};
</script>
<template>
  <q-drawer
    :model-value="props.rightDrawerOpen"
    side="right"
    overlay
    behavior="mobile"
    class="sidebar-wrapper q-pa-lg"
    @update:model-value="handleModelValueUpdate($event)">
    <div class="content-wrapper">
      <RightMenu @click="handleModelValueUpdate" />
      <div class="flex-spacer"></div>
      <q-btn flat icon="exit_to_app" label="Выход" class="logout-button" @click="logout" />
    </div>
  </q-drawer>
</template>

<style lang="scss">
.test {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
.sidebar-wrapper {
  background: var(--info);
  display: flex;
  height: 100%;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  height: 100%;
  width: 100%;
}

.flex-spacer {
  flex-grow: 1;
}

.logout-button {
  margin-top: auto;
}
</style>
