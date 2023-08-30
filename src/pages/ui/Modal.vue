<template>
  <h1 class="heading-1">Modal</h1>
  <BaseButton @click="showModal = !showModal" label="showModal"/>

  {{ luckyField }}
  {{ checked }}
  <BaseModal v-if="showModal" header @close="showModal = !showModal">

    <template #header>
      <h1>Заголовок</h1>
    </template>
    <template #body>
      <BaseCheckbox
      label="Checkbox Active"
      id="checkboxActive"
      name="checkboxActive"
      value="I like it"
      v-model:checked="checked" />

      <div class="input">
        <BaseInput 
      label="Your lucky number"
        name="lucky"
        placeholder="BaseInput your lucky number"
        v-model:value="luckyField"
      />
      </div>
      
    </template>
    <template #footer>
      <BaseButton  @click="showModal = !showModal" label="Закрыт"></BaseButton>
      <BaseButton label="Отправить"></BaseButton>
    </template>
  </BaseModal>
</template>

<script setup>
import { ref } from 'vue'
import BaseModal from '../components/ui/BaseModal.vue';
import BaseButton from '../components/ui/BaseButton.vue';
import BaseCheckbox from '../components/ui/Checkbox/BaseCheckbox.vue';
import BaseInput from '../components/ui/BaseInput.vue';

const showModal = ref(false)
const luckyField = ref('')
const checked = ref(false)
</script>

<style scoped lang="scss">
.input {
  padding: 20px 0 0 0;
}
</style>