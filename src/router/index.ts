import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/IndexPage.vue'
import ListCustomerPage from '../pages/ListCustomerPage.vue'

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
      path: '/customers',
      name: 'customers',
      component: ListCustomerPage,
      meta: { title: 'Customers' }
    }
  ]
})

export default router
