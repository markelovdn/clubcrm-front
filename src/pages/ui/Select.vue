<template>
  <h1 class="heading-1">Select</h1>
  <h1 class="heading-2">BaseSelect</h1>
  <div class="line-block">
    <BaseSelect 
    :options="items"
    width="300px"
    name="base select"
    label="base-select"
    emptyItem="true"
    emptyItemLabel="Нет"
    @selectedValue="(value) => selectValue = value"/>
    <p> Выбрано: {{ selectValue }}</p>
  </div>

  <h1 class="heading-2">Disable Select</h1>
  <div class="line-block">
    <BaseSelect 
    :options="items"
    width="300px"
    name="base select1"
    label="base-select1"
    disabled="true"
    @selectedValue="(value) => selectValue2 = value"/>
    <p> Выбрано: {{ selectValue2 }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'

const items = ref([
  {name: 'item1asdasdasd', id: 'h1'},
  {name: 'item2', id: 'h2'},
  {name: 'item3', id: 'h3'},
  {name: 'item4', id: 'h4'},
])

const selectValue = ref('')
const selectValue2 = ref('')
</script>