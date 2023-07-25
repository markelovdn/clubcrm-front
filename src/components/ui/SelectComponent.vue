<template>
  <div>
    <select class="select-base">
      <slot></slot>
    </select>
  </div>

</template>

<script setup>

</script>

<style scoped lang="scss">
.select-base {
  width: 100%;
  height: 46px;
  padding: 12px 13px;
  font-weight: 400;
  color: #8c9097;
  background-color: #fff;
  border: 1px solid #d2d6da;
  appearance: none;
  border-radius: 8px;
  transition: box-shadow .15s ease,border-color .15s ease;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  line-height: normal;
}
</style>


