<template>
  <div class="base-modal">
    <div class="base-modal__mask">
      <div class="base-modal__wrapper">
        <div class="base-modal__container">

          <div
          v-if="header"
          class="base-modal__container-header">
            <slot name="header">
            </slot>
            <span @click="emit('close')">
              <font-awesome-icon icon="xmark" />
            </span>
          </div>

          <div class="base-modal__container-body">
            <slot name="body">
              
            </slot>
          </div>

          <div class="base-modal__container-footer">
            <slot name="footer">
              
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close'])
const props = defineProps({
  header: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped lang="scss">
.base-modal {
  &__mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  &__wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &__container {
    width: 80%;
    margin: 0px auto;
    padding: 0 0 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }

  &__container-header {
    width: 98%;
    display: flex;
    flex-direction: row;
    padding: 10px 0 10px 0;
    justify-content: space-between;
    border-bottom: 1px solid $color_secondary_300;

    & span {
      cursor: pointer;
    }
  }

  &__container-body {
    padding: 10px 0 10px 0;
  }
  
  &__container-footer {
    align-self: flex-end;
  }
}
</style>