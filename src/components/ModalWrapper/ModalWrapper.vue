<script setup lang="ts">
import { mdiClose } from "@quasar/extras/mdi-v6";

const emit = defineEmits(["close", "validation-change"]);

defineProps<{
  header?: string;
  subHeader?: string;
  closeButtonHeader?: boolean;
  fullWidth?: boolean;
}>();
</script>

<template>
  <Teleport to="body">
    <q-dialog :model-value="true">
      <q-card class="dialog-card">
        <div v-if="closeButtonHeader" class="absolute-top q-pt-md q-pr-md">
          <q-icon
            :name="mdiClose"
            class="float-right cursor-pointer close"
            @click="emit('close', 'validation-change')" />
        </div>
        <slot v-if="header" name="header" class="dialog-card__header">
          <b>
            {{ header }}
          </b>
        </slot>
        <slot name="subHeader">
          <div v-if="subHeader" class="dialog-card__sub-header">
            <span class="sub-header__text">
              {{ subHeader }}
            </span>
          </div>
        </slot>

        <slot wrapper-class="flex-column-h100" />
      </q-card>
    </q-dialog>
  </Teleport>
</template>

<style lang="scss" scoped>
.dialog-card {
  padding: 35px;
  background-color: var(--info);
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 12px;

  &__sub-header {
    margin-bottom: 24px !important;
    display: flex;
    justify-content: center;

    &__text {
      color: var(--dark);
      line-height: 18px;
      font-weight: 500;
      font-size: 14px;
    }
  }
}

.close {
  font-size: 20px;
  color: var(--dark);
}
</style>
