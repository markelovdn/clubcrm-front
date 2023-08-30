<template>
<h1 class="heading-1">Checkbox</h1>
<h1 class="heading-2">Checkbox Active</h1>
  <div class="line">
    <BaseCheckbox
      label="Checkbox Active"
      id="checkboxActive"
      name="checkboxActive"
      value="I like it"
      v-model:checked="checkboxActive" />
  </div>
  <h2 class="heading-2">Checkbox Disabled</h2>
  <div class="line">
    <BaseCheckbox
        label="Checkbox Disabled"
        id="checkboxDisabled"
        name="checkboxDisabled"
        value="I like it"
        :disabled="checkboxDisabled"
        v-model:checked="checkboxDisabledChecked"/>
  </div>
  <h2 class="heading-2">Checkbox Group</h2>
  <div class="line line_block">
    <p>Selected Heroes: {{selectedItems}}</p>
    <CheckboxGroup v-model:value="selectedItems" name="heroes" :options="list"/>
  </div>
  <h2 class="heading-2">Switch</h2>
  <div class="line line_block">
    <p>Switch: {{switchItem}}</p>
    <BaseCheckbox
        label="I'm a professional"
        id="switch"
        name="switch"
        value="I'm a professional"
        type="switch"
        v-model:checked="switchItem"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseCheckbox from '@/components/ui/Checkbox/BaseCheckbox.vue'
import CheckboxGroup from '@/components/ui/Checkbox/CheckboxGroup.vue'

const checkboxActive = ref(true)
const checkboxDisabled = ref(true)
const checkboxDisabledChecked = ref(true)

const list = ref([
  {name: 'item1', id: 'h1'},
  {name: 'item2', id: 'h2'},
  {name: 'item3', id: 'h3'},
  {name: 'item4', id: 'h4'},
])

const selectedItems = ref(['h1', 'h3'])

const switchItem = ref(false)
</script>