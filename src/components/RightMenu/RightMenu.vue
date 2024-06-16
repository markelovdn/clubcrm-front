<script setup lang="ts">
import { ref, watch } from "vue";

import { menuItems } from "@/components/RightMenu/MenuItems";
import type { TMenuItem } from "@/components/RightMenu/types";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();
const userMenuItems = ref<TMenuItem[]>([]);

watch(
  () => userStore.user,
  (newUser) => {
    if (newUser) {
      const userRoles = newUser.roles.map((userRole) => userRole.code);
      userMenuItems.value = Object.values(menuItems).reduce((acc, item) => {
        const allowedRoles = item[0].roles;
        const hasMatchingRole = userRoles.some((role) => allowedRoles.includes(role));
        if (hasMatchingRole) {
          return [...acc, ...item];
        }
        return acc;
      }, []);
    }
  },
  { immediate: true },
);
</script>

<template>
  <div class="full-width">
    <div v-for="menuItem in userMenuItems" :key="menuItem.link">
      <q-btn
        :to="menuItem.link"
        flat
        :label="menuItem.name"
        align="left"
        class="q-mb-sm menu-item full-width"
        :icon="menuItem.icon" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-item {
  color: var(--text-color);
  border-radius: var(--border-radius);
  height: 40px;
}
</style>
