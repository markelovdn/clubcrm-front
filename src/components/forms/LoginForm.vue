<script setup lang="ts">
import { ref, computed } from 'vue';
import BaseInput from '@/components/ui/BaseInput.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { useAuthStore } from '../../store/auth';
import useVuelidate from '@vuelidate/core'
import {helpers, minLength, required, not} from '@vuelidate/validators'

const showPassword = ref<Boolean>(false);
const passwordField = ref<String>('');
const phoneField = ref<String>('');
const authStore = useAuthStore();
const userError = ref({}); 

const getUserError = () => {
  if(authStore.user.error) {
    userError.value = authStore.user.error.type; 
  }
};

const rules = computed(() => {
  const localRules = {
          phoneField: {
    minLength: helpers.withMessage(`Минимальная длина: 11 цифр`, minLength(17))
  },

  passwordField: {required},

      }
      if (userError.value === 'phone') {
        // if billing is not the same as shipping, require it
        console.log(userError.value)
        
      }
      return localRules
})

const v = useVuelidate(rules, {phoneField, passwordField})

const submitForm = () => {
  v.value.$touch()
  if (v.value.$error) return
  alert('Form submitted')
}
</script>

<template>
  <div class="login-form__content">
    <form @submit.prevent="submitForm">
      <div class="login-form__input">
      <BaseInput
        type="text"
        name="phone"
        placeholder="Телефон"
        label="Телефон"
        width="90%"
        maska="+7 (###) ### ####"
        v-model:value="v.phoneField.$model"
        :error="v.phoneField.$errors"/>
    </div>
    
    <div class="login-form__input">
      <BaseInput 
        type="password"
        name="password"
        placeholder="Пароль"
        label="Пароль"
        width="90%"
        :hidden="showPassword"
        v-model:value="passwordField"/>
    <BaseInput 
        type="text"
        name="passwordShow"
        placeholder="Пароль"
        label=""
        width="90%"
        :hidden="!showPassword"
        v-model:value="passwordField"
    />
    </div>
    </form>
    
    <div class="show-hide__password">
      <span
        v-if="!showPassword"
        @click = "showPassword = !showPassword">
        <font-awesome-icon icon="fa-solid fa-eye" />
      </span>
      <span
        v-if="showPassword"
        @click = "showPassword = !showPassword">
        <font-awesome-icon icon="fa-solid fa-eye-slash" />
      </span>
    </div>
    
    
    <BaseButton 
      label = "Войти" 
      label_color = "white" outlined color = "danger"
      rounded
      size = "large"
      @click="authStore.fetchUser(phoneField, passwordField);"/>

    <div class="forgot-password">
        <router-link color="white" to="/profile">
          <span>
            Забыли пароль?  {{ getUserError() }}
          </span>
        </router-link>
    </div>
  </div>
    

</template>

<style scoped lang="scss">
.login-form__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 90vh;
}
  .login-form__input {
    border-radius: 8px;
    margin-bottom: 30px;
  }

  .forgot-password {
    padding-top: 40px;
    text-align: center;
  
    & span {
      color: white;
    }
  }

  .show-hide__password {
    display: flex;
    position: relative;
    z-index: 2;
    top: -60px;
    left: 190px;
    color: $color_secondary_600;
  }
</style>