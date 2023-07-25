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
  //background: #ffffff;
  //border: 1px solid $color_gray;
  //border-radius: 8px;
  //width: 100%;
  //margin: 5px;
  //color: #A0AEC0;
  //padding: 15px 15px;
  //font-family: 'Open Sans', sans-serif;
  //font-style: normal;
  //font-weight: 400;
  //font-size: 14px;
  //line-height: 19px;

  border-radius: 6px;
  background: #FFF;
  box-shadow: 0px 1px 3px 0px rgba(50, 50, 93, 0.15), 0px 0px 1px 0px rgba(0, 0, 0, 0.02);
  color: #ADB5BD;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 444px;
  height: 46px;
  flex-shrink: 0;
  padding-left: 15px;
}
</style>


