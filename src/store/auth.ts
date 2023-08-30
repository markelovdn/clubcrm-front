import { defineStore } from "pinia";
import axios from "axios"

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: {},
        errors: {},
    }),

    getters: {
        getUser(state){
            return state.user
          },
    },

    actions: {
        async loginUser(phone: string, password: string) {
              const data = await axios.post('/api/login', {
                phone: phone,
                password: password,
              }).then((response) => {
                localStorage.setItem('token', response.data.access_token)
                this.user = response.data.user;
                // console.log(response.data.user)
                window.location.replace("/profile")

              }).catch((errors) => {
                this.errors = errors.response;
              })
          }
    },
})