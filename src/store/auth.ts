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
          }
    },

    actions: {
        async fetchUser(phone: string, password: string) {
              const data = await axios.post('/api/login', {
                phone: phone,
                password: password,
              }).then((response) => {
                this.user = response.data;
                // console.log(response);
              }).catch((errors) => {
                this.errors = errors.data;
                // console.log(errors)
              })
          }
    },
})