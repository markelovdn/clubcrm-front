<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useUserStore } from "@/stores/userStore";

const route = useRoute();

const emit = defineEmits(["toggleSidebar"]);
const userStore = useUserStore();
const router = useRouter();

const showHeaderOnRoute = computed(() => route.meta.header !== false);
const handleClick = () => {
  emit("toggleSidebar");
};

const auth = () => {
  if (userStore.getUserInfo) {
    router.push({ name: "Profile" });
  } else {
    router.push({ name: "Login" });
  }
};

const iconColor = computed(() => {
  const roles = userStore.getUserInfo?.roles.map((role) => role.code);
  if (roles?.includes("admin")) {
    return "red";
  } else if (roles?.includes("manager")) {
    return "black";
  } else if (roles?.includes("coach")) {
    return "green";
  } else {
    return "grey";
  }
});

const userRoles = computed(() => {
  const roles = userStore.getUserInfo?.roles.map((role) => role.title);
  return roles ? roles.join(", ") : "";
});
</script>
<template>
  <q-header v-if="showHeaderOnRoute !== false" reveal elevated>
    <q-toolbar>
      <q-toolbar-title>
        <q-avatar square class="cursor-pointer" @click="router.push({ name: 'Main' })">
          <q-img src="@/assets/img/logo_dt_legion34.png" />
        </q-avatar>
        {{ route.meta.title }}
      </q-toolbar-title>
      <span>{{ userStore.getUserInfo?.fullName }}</span>
      <span>({{ userRoles }})</span>
      <q-btn flat round @click="auth()">
        <q-icon name="account_circle" :color="iconColor" />
      </q-btn>

      <q-btn dense flat round icon="menu" @click="handleClick" />
    </q-toolbar>
  </q-header>
</template>
<style lang="scss">
.header {
  background: var(--background-card);
  color: var(--text-color);
  height: 60px;
  display: flex;
  align-items: center;
}

.logo {
  width: 116px;
  height: 47px;
  border-radius: unset;
  cursor: pointer;

  @media screen and (max-width: $mobile-max-width) {
    width: 81px;
    height: 33px;
  }
}

.tabs {
  border-radius: 12px;
}

.user-name__text {
  @media screen and (max-width: $mobile-max-width) {
    font-size: 12px;
  }
}
</style>
