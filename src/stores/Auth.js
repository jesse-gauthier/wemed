import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null
  }),
  actions: {
    isAuthenticated() {
      console.log(!!this.user)
      return !!this.user
    },
    async login(email, password) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        this.user = userCredential.user
        const userJson = JSON.stringify(this.user)
        localStorage.setItem('user', userJson)
      } catch (error) {
        console.error(`Error ${error.code}: ${error.message}`)
      }
    },
    async register(email, password) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        this.user = userCredential.user
      } catch (error) {
        console.error(`Error ${error.code}: ${error.message}`)
      }
    },
    logout() {
      auth
        .signOut()
        .then(() => {
          this.user = null
          localStorage.removeItem('user')
        })
        .catch((error) => {
          console.error(`Error ${error.code}: ${error.message}`)
        })
    }
  }
})

export default useAuthStore
