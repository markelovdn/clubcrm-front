<template>
  <div>
    <input type="checkbox" class="checkbox-base" />
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">


.checkbox-base {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background: #FFF;
  box-shadow: 0px 1px 3px 0px rgba(50, 50, 93, 0.15), 0px 0px 1px 0px rgba(0, 0, 0, 0.02);
  border: 1px solid #ccc;
  background: var(--blue-blue-500, #ffffff);
}

/* Фон чекбокса в состоянии активен */
.checkbox-base:checked {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background: #FFF;
  box-shadow: 0px 1px 3px 0px rgba(50, 50, 93, 0.15), 0px 0px 1px 0px rgba(0, 0, 0, 0.02);
  border: 1px solid #ccc;
  background: $color_primary;
}
</style>


