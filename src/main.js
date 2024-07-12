import './assets/entry.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Create Vue application
const app = createApp(App)

// Create Pinia instance
const pinia = createPinia()

// Use Pinia and router plugins
app.use(pinia)
app.use(router)

// Mount the application
app.mount('#app')
