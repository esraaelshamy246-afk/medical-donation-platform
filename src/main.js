import { createApp } from 'vue'
import App from './App.vue'
import router from './router'




import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import FaqView from './views/FaqView.vue'
import RequestsView from './views/RequestsView.vue'

const routes = [
  { path: '/', redirect: '/requests' },
  { path: '/requests', name: 'requests', component: RequestsView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/faq', name: 'faq', component: FaqView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

