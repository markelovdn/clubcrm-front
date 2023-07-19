<template>
  <input
      :type="props.type"
      class="input-base"
      :placeholder="props.placeholder"/>
</template>

<script setup>
const props = defineProps(
    [
        'placeholder',
        'type'
    ])
</script>

<style scoped lang="scss">
.input-base {
  background: #ffffff;
  border: 1px solid $color_gray;
  border-radius: 8px;
  width: 100%;
  margin: 5px;
  color: #A0AEC0;
  padding: 15px 15px;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
}
</style>


