<template>
  <div class="base-card">

  <div
  class="base-card__header">
    <slot name="header">
    </slot>
    <span @click="emit('drag')">
      <font-awesome-icon icon="arrows-up-down-left-right" />
    </span>
  </div>

  <div class="base-card__body">
    <slot name="body"></slot>
  </div>

  <div class="base-card__footer">
    <slot name="footer"></slot>
  </div>
</div>
</template>

<script setup>
const emit = defineEmits(['drag'])
const props = defineProps({
  header: {
    type: Boolean,
    default: false
  },
  footer: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped lang="scss">
.base-card {
    background-color: white;
    color: $color_secondary_600;
    box-shadow: 0px 0px 3px 0px rgba(79, 82, 102, 0.349);
    border-radius: 6px;

    &__header {
      display: flex;
      flex-direction: row;
    padding: 5px;
    justify-content: space-between;

      & span {
        cursor: pointer;
        align-self: flex-end;
      }
    }

    &__body {
      padding: 5px;
    }

    &__footer {
      padding: 5px;
    }

}

</style>