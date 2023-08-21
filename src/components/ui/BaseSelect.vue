<template>
<div class="line" :style="{ width: width }">
  <div class='base-select'>
  <!-- TODO: Косяк с diabled с переводом мыши с активного на disabled
  Ну да, тут mouseleave поскольку на двух разных дивах висит, это не прокатит. -->
    <div :class="[`base-select__header`, {disabled: disabled}]"
    @click="optionsBox.visible = !optionsBox.visible"
    @mouseleave="optionsBox.visible = false">
      <div class="base-select__label">
        <label :class="{label_dropdown: optionsBox.visible, disabled: disabled}" v-if="!optionsBox.selected || optionsBox.visible">
          {{ label }}
        </label>
       {{ optionsBox.selected }}
      </div>
        <div class="base-select__icon">
          <i :class="{arrow_down: optionsBox.visible, disabled: disabled}"></i>
        </div>
    </div>
    
    <div :class="[`base-select__options`, {visible: optionsBox.visible}]"
    @click="optionsBox.visible = !optionsBox.visible"
    @mouseenter="optionsBox.visible = true"
    @mouseleave="optionsBox.visible = false">
      <div class="base-select__item" v-if="emptyItem"
        @click="selectOption('')">{{ emptyItemLabel }}
      </div>

      <div class="base-select__item" v-for="option in options"
      :key="option.id"
      @click="selectOption(option.name)"> {{option.name}}
      </div>
    </div>
  
  </div>
</div>
  
</template>

<script setup>
import { required } from '@vuelidate/validators';
import { ref, reactive, computed } from 'vue'

const emit = defineEmits(['selectedValue'])
const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  width: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    required: false
  },
  emptyItem: {
    type: Boolean,
    required: false,
    default: false
  },
  emptyItemLabel: {
    type: String,
    required: false,
    default: ''
  }
})

const optionsBox = reactive ({
  visible: false,
  selected: null
})

const selectOption = (optionName) => {
  emit('selectedValue', optionName)
  return optionsBox.selected = optionName
};
</script>

<style scoped lang="scss">
.base-select {
    width: 100%;
    margin: 0 auto;
    display: block;
    position: relative;
    
    &__header {
      border: 1px solid $color_secondary_400;
      border-radius: 8px;
      display: flex;
      transition: box-shadow .15s ease;
      cursor: pointer;
    }
    
    &__label {
      color: $color_default;
      font-size: 16px;
	    line-height: 24px;
	    padding: 8px;
    }

    

    &__icon {
      align-items: center;
      display: flex;
      flex-shrink: 0;
      justify-content: center;
      height: 40px;
      margin-left: auto;
      text-align: center;
      width: 40px;

      & i {
        border: solid black;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 3px;
        transform: rotate(-45deg);
        transition: .2s;

        &.arrow_down {
        transform: rotate(45deg);
        transition: .2s;
        }
      }

      & visible {
        display: none;
      }
    }

    &__options {
      z-index: -1;
      opacity: 0;
      border: 1px solid $color_secondary_400;
      border-radius: 8px;
      width: 100%;
      background: white;
      position: absolute;
      top: 50px;
      right: 0;
      left: 0;
      top: 100%;
      transition: .2s;

      &.visible {
        z-index: 1;
        opacity: 1;
      }
    }

    &__item {
      cursor: pointer;
      line-height: 24px;
	    padding: 8px;

      &__empty:hover {
        border-radius: 8px;
        color: white;
        background-color: $color-primary_hover;
      }
      
      }

      &__item:hover {
        border-radius: 8px;
        color: white;
        background-color: $color-primary_hover;
      }
  }

.label_dropdown {
  z-index: 1;
  position: absolute;
  left: 5px;
  top: -12px;
  padding: 0px;
  background-color: white;
  font-size: 10px;
  transition: .2s;
}

.disabled {
color: $color_secondary_400;
pointer-events: none;

& i {
  border-color: $color_secondary_400;
}
}
</style>