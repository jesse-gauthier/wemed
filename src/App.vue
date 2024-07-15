<script setup>
import { RouterView } from 'vue-router'
import appHeader from './components/appHeader.vue'

import useAuthStore from './stores/Auth.js'
import { ref } from 'vue'
const Auth = useAuthStore()
const user = ref(Auth.user)
</script>

<template>
  <div class="h-screen w-[85dvw] mx-auto pt-10 pb-5 flex flex-col">
    <appHeader v-if="user" />
    <div class="flex-1 mt-8 overflow-hidden">
      <RouterView class="h-full border-2 border-slate-400 p-4" />
    </div>
  </div>
</template>

<style scoped></style>
