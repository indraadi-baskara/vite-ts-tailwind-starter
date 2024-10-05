import { createRouter, createWebHistory } from 'vue-router'
import CustomerPage from '../pages/CustomerPage.vue'
import HomePage from '../pages/IndexPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { title: 'Home' }
    },
    {
      path: '/customer',
      name: 'customer',
      component: CustomerPage,
      meta: { title: 'Customer' }
    }
  ]
})

export default router
