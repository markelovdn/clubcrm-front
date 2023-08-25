import { defineStore } from "pinia";
import axios from "axios"

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: {},
    }),

    getters: {
        getUser(state){
            return state.user
          }
    },

    actions: {
        async fetchUsers() {
            try {
              const data = await axios.post('/api/login')
                this.user = data.data
              }
              catch (error) {
                alert(error)
                console.log(error)
            }
          }
    },
})