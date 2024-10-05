import type { RouteRecordRaw } from 'vue-router'

export function serviceRoutes(): Readonly<RouteRecordRaw[]> {
  return [
    {
      path: '/layanan',
      name: 'layanan.index',
      component: () => import('./ServiceIndex.vue'),
    },
  ]
}
