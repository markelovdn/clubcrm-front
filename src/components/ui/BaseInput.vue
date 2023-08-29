<template>  
  <div class="base-input" :style="{ width: width }">
    <input class="input-text"
     :type="type"
     :name="name"
     :id="name"
     :placeholder="placeholder"
     :value="value"
     v-maska :data-maska = maska
      @input="updateValue"
      :hidden="hidden">
    <label :for="name" class="input-label">{{ label }}</label>
  </div>
  <TransitionGroup>
      <div class="base-error" v-for="element of error" :key="element.$uid">
        <div class="base-error__message">
          {{ element.$message }}
        </div>
      </div>
    </TransitionGroup>
    <TransitionGroup>
      <div class="base-error" v-if="server_error && server_error.message">
        <div class="base-error__message">
          {{server_error.message}}
        </div>
      </div>
    </TransitionGroup>
</template>

<script setup>
import { ref } from "vue"
import { vMaska } from "maska"
const emit = defineEmits(['update:value'])
const props = defineProps({
  error: {
    type: Array,
    required: false
  },
  server_error: {
    type: Object,
    required: false
  },
  value: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  width: {
    type: String,
    default: '100%'
  },
  maska: {
    type: String,
    default: ''
  },
  hidden: {
    type: Boolean,
    default: false
  },


})

const updateValue = (e) => {
  emit('update:value', e.target.value)
}
</script>

<style lang="scss">
.base {
  &-input {
    position: relative;
  }

  &-error {
    background: $color_danger_600;
    margin-top: 4px;
    border-radius: 7px;
    font-size: 13px;
    color: #fff;
    padding: 5px;
  }
}

.input {
  &-text {
    border: 1px solid $color_secondary_400;
    padding: 0 10px;
    height: 40px;
    border-radius: 7px;
    font-size: 15px;
    width: 100%;
    position: relative;
    z-index: 1;

    &:focus {
      &+.input-label {
        z-index: 1;
        opacity: 1;
        top: -20px;
      }
    }

    &:not(:placeholder-shown) {
      &+.input-label {
        z-index: 1;
        opacity: 1;
        top: -20px;
      }
    }
  }

  &-label {
    font-weight: bold;
    display: block;
    position: absolute;
    top: 20px;
    opacity: 0;
    z-index: -1;
    transition: .3s;
    font-size: 13px;
    color: $color-secondary_300;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>