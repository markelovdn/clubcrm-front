<template>
  <input :type="props.type"
         class="input"
         :placeholder="props.placeholder">
</template>

<script setup>
const props = defineProps(['type', 'placeholder'])

</script>

<style scoped lang="scss">
.input {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  width: 100%;
  margin: 0;
  line-height: 1.5rem;
  color: #A0AEC0;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
}









</style>