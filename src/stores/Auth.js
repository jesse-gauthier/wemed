// src/stores/auth.js
import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, auth } from '@/firebase'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: false
  }),
  actions: {
    isAuthenticated() {
      console.log(!!this.user)
      return !!this.user
    },
    async login(email, password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          this.user = userCredential.user
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorMessage + ' ' + errorCode)
        })
    }
  }
})
