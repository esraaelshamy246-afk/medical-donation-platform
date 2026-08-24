import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '@/views/AuthView.vue'
import UserDashboardView from '@/views/UserDashboardView.vue'
import AdminDashboardView from '@/views/AdminDashboardView.vue'

const routes = [
  {
      path: '/',
          redirect: '/auth'
            },
              {
                  path: '/auth',
                      name: 'Auth',
                          component: AuthView
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
                                                                