<template>
  <h1 class="heading-1">Tabs</h1>
  <BaseTabs
      :names="tabs"
      :selectedTab="selectedTab"
      @changeTab="changeTab">
    <div v-if="selectedTab === 'About'">
      Lorem ipsum dolor sit amet.
    </div>
    <div v-if="selectedTab === 'Vue'">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, id.
    </div>
    <div v-if="selectedTab === 'React'">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, atque. Laborum iusto odit minus incidunt.
    </div>
  </BaseTabs>
</template>

<script setup>
import {ref} from 'vue'
import BaseTabs from '@/components/ui/BaseTabs.vue'

const tabs = [
  {name: 'About', label: 'О проекте'},
  {name: 'Vue', label: 'Про Vue'},
  {name: 'React', label: 'Про React'},
]
const selectedTab = ref('Vue')

const changeTab = (tabName) => {
  selectedTab.value = tabName
}
</script>