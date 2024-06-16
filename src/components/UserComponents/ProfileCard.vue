<script setup lang="ts">
import { defineProps } from "vue";

import { TUserPayload } from "@/api/User/types";

const props = defineProps({
  isEdit: Boolean,
  data: {
    type: Object as () => TUserPayload,
    default: () => ({}),
  },
  hasRole: Boolean,
  roles: {
    type: Array as () => { title: string }[],
    default: () => [],
  },
});

const emit = defineEmits(["edit-profile"]);
</script>

<template>
  <div class="card-profile">
    <div class="card-profile__header">
      <div class="title">
        {{ data.secondName }} {{ data.firstName }} {{ data.middleName }}
        <span v-if="props.hasRole" class="q-mb-sm text-h6">
          <q-badge
            v-for="userRole in props.roles"
            :key="userRole.title"
            outline
            align="middle"
            color="primary"
            size="md">
            {{ userRole.title }}
          </q-badge>
        </span>
      </div>
    </div>
    <div class="card-profile__body info-text">
      <div>
        <q-icon name="cake" class="q-mr-sm" />
        {{ data.dateBirthday }}
      </div>
      <div>
        <q-icon name="phone" class="q-mr-sm" />
        {{ data.phone }}
      </div>
      <div>
        <q-icon name="mail" class="q-mr-sm" />
        {{ data.email }}
      </div>
    </div>

    <div class="card-profile__footer">
      <q-btn round color="primary" icon="edit" @click="emit('edit-profile')" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card-profile {
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius);

  &__footer {
    display: flex;
    justify-content: end;
    align-items: center;
  }
}
</style>
