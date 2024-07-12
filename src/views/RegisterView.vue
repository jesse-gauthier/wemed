<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input v-model="name" type="text" placeholder="Name" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'

export default {
  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const authStore = useAuthStore()

    const register = async () => {
      try {
        await authStore.register({ email: email.value, password: password.value })
        this.$router.push('/login')
      } catch (error) {
        console.error(error)
      }
    }

    return {
      name,
      email,
      password,
      register
    }
  }
}
</script>
