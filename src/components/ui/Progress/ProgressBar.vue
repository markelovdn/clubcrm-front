<template>
  <div class="progress-container" :style="[{ 'max-width': maxWidth }]">
    <span class="progress-percent" :style="[{ 'color': `$color_${color})` }]">{{ percent }}%</span>
    <div class="progress" :style="[{ 'background': `$color_${color}_hover)` }]">
      <div class="progress-bar" :style="[{ 'width': `${percent}%` }, { 'background': `$color_${color})` }]"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  maxWidth: {
    type: String,
    default: '300px'
  },
  percent: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    default: 'primary'
  }
})
</script>

<style lang="scss" scoped>
.progress {
  height: 10px;
  border-radius: 4px;

  &-container {
    margin-bottom: 20px;
    overflow: hidden;
  }

  &-bar {
    background: $color-primary;
    height: 100%;
    border-radius: 4px;
    transition: .5s;
  }

  &-percent {
    display: block;
    text-align: center;

    font-weight: bold;
    font-size: 17px;
    margin-bottom: 10px;
  }
}
</style>