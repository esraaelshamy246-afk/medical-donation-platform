import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import AuthView from '../views/AuthView.vue'
import RequestsView from '../views/RequestsView.vue'
import UserDashboardView from '../views/UserDashboardView.vue'
import AdminDashboardView from '../views/AdminDashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'Auth',
    component: AuthView
  },
  {
    path: '/requests',
    name: 'Requests',
    component: RequestsView
  },
  {
  path: '/requests/:id',
  name: 'RequestDetails',
  component: RequestsView
  },
  {
    path: '/dashboard',
    name: 'UserDashboard',
    component: UserDashboardView
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: AdminDashboardView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router