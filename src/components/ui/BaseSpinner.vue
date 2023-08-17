<template>
<div class="base-spinner">
  <div class="base-spinner__circle circle-1"></div>
  <div class="base-spinner__circle circle-2"></div>
</div>
</template>

<style scoped lang="scss">
.base-spinner, .base-spinner * {
      box-sizing: border-box;
    }
    .base-spinner {
      width: 30px;
      height: 30px;
      border-radius: 100%;
      position: relative;

    &__circle {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: calc(30px / 10) solid transparent;

      &.circle-1 {
      border-top-color: $color_secondary_600;
      animation: base-spinner-animation 1s infinite;
      }

      &.circle-2 {
        border-bottom-color: $color_secondary_600;;
        animation: base-spinner-animation 1s infinite;
      }
    }
  }

@keyframes base-spinner-animation {
  0% {
    transform: rotate(0deg);

  }
  100%{
    transform: rotate(360deg);
  }
}
</style>