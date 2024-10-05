import { createRouter, createWebHistory } from 'vue-router'
import AddCustomerPage from '../pages/Customer/AddPage.vue'
import ListCustomerPage from '../pages/Customer/ListPage.vue'
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
      path: '/customers',
      name: 'customers',
      component: ListCustomerPage,
      meta: { title: 'Customers' }
    },
    {
      path: '/add-customer',
      name: 'add-customer',
      component: AddCustomerPage,
      meta: { title: 'Add Customer' }
    }
  ]
})

export default router
