import { serviceRoutes } from '@/features/Service'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/features/misc/components/WelcomePage.vue'),
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
  },
  ...serviceRoutes(),
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
