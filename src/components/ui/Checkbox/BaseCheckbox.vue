<template>
  <label :class="['base-checkbox', classes]">
    <input
        type="checkbox"
        :checked="modelValue"
        v-model="modelValue"
        @change="emit('update:modelValue', $event.target.checked)"
        :disabled="props.disabled"
        :class="['base-checkbox__input', classes]">
      <span :class="['base-checkbox__figure', classes]"></span>
      <span class="base-checkbox__label">
        <slot></slot>
      </span>
  </label>
</template>

<script setup>
import {computed} from "vue";
import { ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  disabled: {
    type: String,
    default: null
  },
  theme: {
    type: String,
    default: 'default',
    // validate: () => ['blue'].includes(this.theme)
  },
})
const emit = defineEmits(['update:modelValue'])

const classes = computed(() => [
  `theme-${props.theme}`
])

const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  },
})
</script>

<style scoped lang="scss">
.base-checkbox {
  position: relative;
  display: inline-block;
  padding-left: 18px;
  padding-bottom: 15px;

  &__figure {
    position: absolute;
    margin-left: -16px;
    margin-top: 2px;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    background-color: $color_white;
    box-shadow: 0 0 0 2px $color_primary;

    &.theme-default {
      background-color: red;
    }
  }

  &__label {
    position: relative;
    padding-left: 15px;
    padding-right: 5px;
    top: 5px;
  }

  &__input {
    content: '';
    position: absolute;
    appearance: none;
    &.theme-default {
      background-color: red;
    }
  }

  &__input:checked + &__figure:after {
    content: '\f00c';
    font-family: FontAwesome;
    font-weight: lighter;
    font-size: 24px;
    color: white;
    background-color: $color_primary;
    border-radius: 1px;
    transition: .2s;
    display: table-cell;
    &.theme-default {
      background-color: red;
    }
  }

  &__input:focus + &__figure {
    box-shadow:
        0 0 0 2px $color_primary,
        0 0 4px 2px $color_primary;
    &.theme-default {
      background-color: red;
    }
  }

  &__input:disabled + &__figure {
    box-shadow: 0 0 0 2px $color_secondary_400;
    &.theme-default {
      background-color: red;
    }
  }

  &__input:checked:disabled + &__figure:after {
    background-color: $color_secondary_400;
    &.theme-default {
      background-color: red;
    }
  }
}
</style>


