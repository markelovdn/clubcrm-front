<template>
  <label :class="['base-radio', classes]">
    <input
        type="radio"
        :modelValue="modelValue"
        v-model="picked"
        @input="emit('update:modelValue', $event.target.value)"
        :disabled="props.disabled"
        :class="['base-radio__input', classes]">
    <span :class="['base-radio__figure', classes]"></span>
    <span class="base-radio__label">
        <slot></slot>
      </span>
  </label>
</template>

<script setup>
import {computed} from "vue";
import { ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
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
.base-radio {
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
    border-radius: 50%;
    background-color: $color_white;
    box-shadow: 0 0 0 2px $color_primary;

    &.theme-default {
      background-color: $color_white;
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
      background-color: $color_white;
    }
  }

  &__input:checked + &__figure:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: $color_primary;
    left: 2px;
    top: 2px;
    border-radius: 50%;
    transition: .2s;
    display: table-cell;
    &.theme-default {
      background-color: $color_white;
    }
  }

  &__input:focus + &__figure {
    box-shadow:
        0 0 0 2px $color_primary,
        0 0 4px 2px $color_primary;
    &.theme-default {
      background-color: $color_white;
    }
  }

  &__input:disabled + &__figure {
    box-shadow: 0 0 0 2px $color_secondary_400;
    &.theme-default {
      background-color: $color_white;
    }
  }

  &__input:checked:disabled + &__figure:after {
    background-color: $color_secondary_400;
    &.theme-default {
      background-color: $color_white;
    }
  }
}
</style>


