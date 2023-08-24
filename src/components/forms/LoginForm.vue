<script setup lang="ts">
import { ref } from 'vue';
import { vMaska } from "maska"
import BaseInput from '@/components/ui/BaseInput.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

const forgotPassword :boolean = ref(false);
</script>

<template>
    <div class="login-form__input">
      <BaseInput
    type="text"
    name="phone"
    placeholder="Телефон"
    label="Телефон"
    width="90%"
    maska="+7 (###) ###-##-##"
    />
    </div>
    
    <div class="login-form__input">
      <BaseInput 
        type="password"
        name="password"
        placeholder="Пароль"
        label="Пароль"
        width="90%"
    />
    </div>
    
    <BaseButton 
      label = "Войти" 
      label_color = "white" outlined color = "danger"
      rounded
      size = "large"
      @click="forgotPassword = !forgotPassword"/>

    <div v-if="forgotPassword" class="forgot-password">
        <router-link color="white" to="/profile">
          <span>
            Забыли пароль?
          </span>
        </router-link>
    </div>

</template>

<style scoped lang="scss">
  .login-form__input {
    border-radius: 8px;
    margin-bottom: 30px;
    box-shadow: -5px -5px 5px -5px rgb(255, 255, 255) inset;
  }

  .forgot-password {
    padding-top: 20px;
    text-align: center;

    & span {
      color: white;
    }
  }
</style>