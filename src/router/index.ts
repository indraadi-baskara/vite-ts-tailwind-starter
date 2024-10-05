import { createRouter, createWebHistory } from 'vue-router'
import ListCustomerPage from '../pages/Customer/ListPage.vue'
import UpsertPage from '../pages/Customer/UpsertPage.vue'
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
      component: UpsertPage,
      meta: { title: 'Add Customer' }
    },
    {
      path: '/edit-customer/:id',
      name: 'edit-customer',
      component: UpsertPage,
      meta: { title: 'Edit Customer' }
    }
  ]
})

export default router
