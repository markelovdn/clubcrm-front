<script lang="ts">
// Path: src\layouts\HeroLayout.vue

import { defineComponent } from "vue";

export default defineComponent({
    name: "HeroLayout",
});
</script>

<script setup lang="ts">
import { ref } from 'vue';
import BaseButton from '@/components/ui/BaseButton.vue'
import LoginForm from '@/components/forms/LoginForm.vue'
const show_form = ref(false);
</script>

<template>
<!-- <div :class="['hero-overlay', {show_form: show_form}]"></div> -->
<div 
:class="['hero-container', {show_form: show_form}]" 
style="background: url('/taekwondo-bg.jpg') center center/cover no-repeat">
  <div :class="['hero-container__logo', {show_form: show_form}]">
      <img :class="['img', {show_form: show_form}]" src="@/assets/img/legion_1.png" >
    </div>
<div class="hero-container__text">
      <span :class="{hide: show_form}">
        Быть лучшим среди лучших
      </span>
    </div>
<div class="hero-container__button">
  <span :class="{hide: show_form}">
    <BaseButton 
      label = "Войти" 
      label_color = "white" outlined color = "danger"
      rounded
      size = "large"
      @click = "show_form = !show_form" />
      </span>
    </div>
</div>
<div :class="['login-form', {show: show_form}]">
  <span>asd</span>  
  <!-- <LoginForm /> -->
</div>
</template>

<style scoped lang="scss">
.hero-overlay {
  height: 100vh;
  width: 100vw;
  z-index: 1;
  opacity: .7;
  position: absolute;
  background-color: $color_black;

  &.show_form {
    transition: 2s;
    opacity: .9;
  }
}
.hero-container {
  display: flex;
  flex-direction: column;
  position:relative;
  align-items: stretch;
  justify-content: start;
  height: 100vh;
  width: 100vw;

    &__logo {
      z-index: 2;
      opacity: .8;
      display: flex;
      height: 55%;
      justify-content: center;
      align-items: end;

      &.show_form {
        animation: transform-logo 2s 1;
        animation-fill-mode: forwards;
      }
      
    & .img {
      width: 210px;
      height: 180px;
      padding-top: 5px;
      object-fit: contain;
      animation: show 2s 1;
      animation-fill-mode: forwards;
    }
  }

&__text {
  z-index: 2;
  word-break: break-word;
  text-align: center;
  padding-top: 15px;
  color: white;
  font-size: 150%;
  font-weight: bolder;
  animation: show 2s 1;
  animation-fill-mode: forwards;

    & span {
      opacity: .8;
        &.hide {
        transition: 1s;
        opacity: 0;
      }
    }
  }

  &__button {
    z-index: 2;
    align-self: center;
    padding-top: 15px;
    animation: show 2s 1;
    animation-fill-mode: forwards;
    opacity: 1;

    & span.hide {
        transition: 1s;
        opacity: 0;
      }
  }
}

.login-form {
  display: none;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 99vw;
  height: 90vh;
  top: 0px;
  opacity: 0;
  z-index: -1;
  // overflow: hidden;

    &.show {
      display: flex;
      z-index: 2;
      animation-name: slideInUp;
      animation-duration: 2s;
      animation-fill-mode: both;
      // overflow: hidden;
    }
}

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.8;
    z-index: 2;
  }
}

@keyframes transform-logo {
  0% {
    height: 55%;
    width: 100%;
    opacity: .9;
  }
  100% {
    height: 27%;
    width: 100%;
    opacity: .1;
  }
}

@keyframes slideInUp {
  0% {
    opacity: 0;
  transform: translateY(120px);
  visibility: visible;
  }
  100% {
    opacity: 1;
  transform: translateY(0px);
  }
  } 
</style>
