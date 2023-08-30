<template>
  <h1 class="heading-1">Progress</h1>
  <h2 class="heading-2">Progress Bar</h2>
  <div class="line line_block">
    <ProgressBar maxWidth="400px" :percent="percentBar" color="primary"/>
    <BaseButton label="Add 10%" @click="addPercentBar"/>
  </div>
  <h2 class="heading-2">Progress Circle</h2>
  <div class="line line_block">
    <ProgressCircle :percent="percentCircle" color="primary"/>
    <BaseButton label="Add 10%" @click="addPercentCircle"/>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import ProgressBar from '../components/ui/Progress/ProgressBar.vue'
import ProgressCircle from '../components/ui/Progress/ProgressCircle.vue'
import BaseButton from '../components/ui/BaseButton.vue'

const percentBar = ref(40)
const percentCircle = ref(60)

const addPercentBar = () => {
  percentBar.value += 10
  if (percentBar.value > 100) {
    percentBar.value = 100
  }
}

const addPercentCircle = () => {
  percentCircle.value += 10
  if (percentCircle.value > 100) {
    percentCircle.value = 100
  }
}
</script>