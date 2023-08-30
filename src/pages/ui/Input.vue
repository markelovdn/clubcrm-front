<template>
  <h1 class="heading-1">Inputs</h1>

  <form @submit.prevent="submitForm">
    <BaseInput
      label="Your name"
      name="name"
      placeholder="BaseInput your name"
      v-model:value="v.nameField.$model"
      :error="v.nameField.$errors" />

    <BaseInput
        label="Your email"
        name="email"
        placeholder="BaseInput your email"
        v-model:value="v.emailField.$model"
        :error="v.emailField.$errors"/>

    <BaseInput
        label="Your lucky number"
        name="lucky"
        placeholder="BaseInput your lucky number"
        v-model:value="v.luckyField.$model"
        :error="v.luckyField.$errors"/>

    <BaseInput
        label="Your password"
        name="password"
        placeholder="Please Baseinput password"
        v-model:value="passwordField"
        type="password"/>

    <BaseInput
        label="Confirm password"
        name="confirm"
        placeholder="Please confirm password"
        v-model:value="v.confirmPasswordField.$model"
        :error="v.confirmPasswordField.$errors"
        type="password"/>

    <BaseInput
        label="Frontend string"
        name="frontend"
        placeholder="BaseInput string with frontend"
        v-model:value="v.frontendField.$model"
        :error="v.frontendField.$errors"/>

    <BaseButton label="Submit" color="primary"></BaseButton>
  </form>
</template>

<script lang="ts" setup>
// TODO: логику с валидацией инпутов (напр. useFieldValidation) можно вытащить в Composables https://vuejs.org/guide/reusability/composables.html. Да там и не только инпуты валидировать можно, но и любые другие компоненты, работающие с данными (Select, Checkbox, ...)
import { ref, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import {helpers, minLength, maxLength, numeric, email, sameAs} from '@vuelidate/validators'

import BaseInput from '../components/ui/BaseInput.vue'
import BaseButton from '../components/ui/BaseButton.vue'

const nameField = ref('')
const emailField = ref('')
const luckyField = ref('')
const passwordField = ref('')
const confirmPasswordField = ref('')
const frontendField = ref('')

const mustBeFrontend = (v: string) => v.includes('frontend')

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage(`Минимальная длина: 3 символа`, minLength(3))
  },
  emailField: {
    email: helpers.withMessage('Вы ввели неверный email', email)
  },
  luckyField: {
    maxLength: helpers.withMessage(`Максимальная длина: 2 символа`, maxLength(3)),
    numeric: helpers.withMessage('Вы можете ввести только цифры', numeric)
  },
  confirmPasswordField: {
    sameAsPassword: helpers.withMessage(`Пароли не совпадают`, sameAs(passwordField.value))
  },
  frontendField: {
    frontendField: helpers.withMessage('Строка должна содержать слово frontend', mustBeFrontend)
  }
}))

const v = useVuelidate(rules, {nameField, emailField, luckyField, confirmPasswordField, frontendField})

const submitForm = () => {
  v.value.$touch()
  if (v.value.$error) return
  alert('Form submitted')
}
</script>