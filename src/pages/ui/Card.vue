<template>
  <h1 class="heading-1">Card</h1>
  <draggable v-model="items" itemKey="id" tag="div" :animation="300">

    <template #item="{ element: item }">
      <div class="box">
        <BaseCard>
          <template #header>
            <p>{{ item.id }}</p>
          </template>
          <template #body>
            <p>{{ item.name }}</p>
          </template>
          <template #footer>
            <p>{{ item.content }}</p>
          </template>
        </BaseCard>
      </div>

    </template>

  </draggable>
</template>

<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';
import BaseCard from '../components/ui/BaseCard.vue';

const items = ref([
  { id: 1, name: "item 1", content: "content 1" },
  { id: 2, name: "item 2", content: "content 2" },
  { id: 3, name: "item 3", content: "content 3" },
  { id: 4, name: "item 3", content: "content 4" },
])
</script>
<style scoped lang="scss">
.box {
  display: block;
  padding: 3px;
  width: 30%;
}
</style>