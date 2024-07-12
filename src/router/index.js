import { createRouter, createWebHistory } from 'vue-router'
import DashBoardView from '../views/DashBoardView.vue'
import LoginView from '../views/LoginView.vue'
import { useAuthStore } from '../stores/Auth'

const routes = [
  {
    path: '/dashboard',
    name: 'Dash Board',
    component: DashBoardView,
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  // const isAuthenticated = await authStore.isAuthenticated()
  const isAuthenticated = true

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ path: '/' })
  } else {
    next()
  }
})

export default router
