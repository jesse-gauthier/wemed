<template>
  <header>
    <nav>
      <ul>
        <li v-if="user">User is authed</li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import useAuthStore from '../stores/Auth.js'
import { ref } from 'vue'
const Auth = useAuthStore()
const user = ref(Auth.user)
</script>
