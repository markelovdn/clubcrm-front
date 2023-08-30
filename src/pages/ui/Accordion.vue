<template>
  <h1 class="heading-1">Accordion</h1>
  <BaseAccordion 
  v-for="item in items"
      :key="item.id"
      :title="item.title"
      :content="item.content">
      <div>
        <BaseButton v-if="item.id != 2"/>
      </div>
      </BaseAccordion>
</template>

<script setup>
import { ref } from 'vue'
import BaseAccordion from '../components/ui/BaseAccordion.vue'
import BaseButton from '../components/ui/BaseButton.vue'

const items = ref([
  {id: '1', title: 'item 1', content: 'content 1askjdflaksdjg;lkfj;alksdjf;askldjf;alksdjf;lkasdjf;lksjdf;laksdjf;laksdjf;alksdjf;laksdjf;laksjdf;laksjdf;lkasjdf;lkasjd;fklajsd;gklas;lgdka;sldgh;alskgja;lskdj;alskdjg;alksjg;alksdjg;alksdjg;alksjg;alksjg;alksdjg;aslkdgj;alksjg;alskjg;alksjdg;aldfgdsfgsdfgdsfgdsfgsdfgjzjchvjkzxhclvkjhxlckjzhvlkjchvlkzjxhcvlkjzxhcvlkjhzxclkjvhlzxkjchvlkzxjchvlkzjxhdfjkasdlgkhdsflkghdsflkj'},
  {id: '2', title: 'item 2', content: 'content 2'},
  {id: '3', title: 'item 3', content: 'content 3'}   
  ])

</script>