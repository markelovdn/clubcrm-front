<template>
  <main class="auth__main">
    <section class="auth__header"></section>
    <section class="auth__content">
      <div class="form-registration">
        <span class="form-registration__title">Welcome back</span>
        <span class="form-registration__subtitle">Enter your email and password to sign in</span>
        <div class="form-registration__block">
          <span class="block__title">Email</span>
          <input type="text" class="block_input">
        </div>
        <div class="form-registration__block">
          <span class="block__title">Password</span>
          <input type="password" class="block_input">
           <InputComponent type="text" placeholder="Имя" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import InputComponent from "@/components/ui/InputComponent.vue";

</script>

<style scoped lang="scss">



.auth__main {
  position: relative;
  width: 1920px;
  height: 1080px;
  background: $gradient_black;
    .auth__header {
      position: absolute;
      width: 1888px;
      height: 424px;
      left: 16px;
      top: 16px;
      background: #D9D9D9;
      border-radius: 15px;
      background: $gradient_black
    }
    .auth__content {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 48px;
      gap: 8px;
      position: absolute;
      width: 446px;
      height: 525px;
      left: 737px;
      top: 277.5px;
      background: #FFFFFF;
      border-radius: 15px;
        .form-registration {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px;
          gap: 24px;
          width: 350px;
          height: 429px;
            &__title {
              width: 350px;
              height: 25px;
              @include heading1;
              color: #172B4D;
              flex: none;
              order: 0;
              align-self: stretch;
              flex-grow: 0;
            }
            &__subtitle {
              width: 350px;
              height: 20px;
              font-family: 'Open Sans';
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 142%;
              display: flex;
              align-items: center;
              color: #8392AB;
              flex: none;
              order: 1;
              align-self: stretch;
              flex-grow: 0;
            }
            &__block {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
            gap: 8px;
            width: 350px;
            height: 77px;
            flex: none;
            order: 2;
            flex-grow: 0;
              .block__title {
                width: 36px;
                height: 19px;
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 19px;
                color: #172B4D;
                flex: none;
                order: 0;
                flex-grow: 0;
              }
              .block_input {
                transition-property: all;
                transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
                transition-duration: 150ms;
                line-height: 1.4rem;
                font-size: 0.875rem;
                padding-left: 0.75rem;
                padding-right: 0.75rem;
                background-clip: padding-box;
                --tw-bg-opacity: 1;
                background-color: rgb(255 255 255 / var(--tw-bg-opacity));
                --tw-border-opacity: 1;
                border-color: rgb(210 214 218 / var(--tw-border-opacity));
                border-style: solid;
                border-width: 1px;
                border-radius: 0.5rem;
                width: 100%;
                display: block;
              }
              }
          }
        }
    }



</style>

