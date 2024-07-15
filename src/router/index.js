import { createRouter, createWebHistory } from 'vue-router'
import DashBoardView from '../views/DashBoardView.vue'
import LoginView from '../views/LoginView.vue'
import { useAuthStore } from '../stores/Auth'
import AppointmentsView from '@/views/AppointmentsView.vue'
import PatientsView from '@/views/PatientsView.vue'
import SettingsView from '@/views/SettingsView.vue'

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
  },
  {
    path: '/appointments',
    name: 'Appointments',
    component: AppointmentsView
  },
  {
    path: '/patient_list',
    name: 'PatientsView',
    component: PatientsView
  },
  {
    path: '/settings',
    name: 'settings ',
    component: SettingsView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  const isAuthenticated = await authStore.isAuthenticated()

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ path: '/' })
  } else {
    next()
  }
})

export default router
