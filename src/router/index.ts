import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lazyLoad',
      name: 'lazyLoad',
      component: () => import('@/components/LazyLoad.vue')
    },
    {
      path: '/dynamicRoute/:id',
      name: 'dynamicRoute',
      component: () => import('@/components/DynamicRoute.vue')
    },
    {
      path: '/dataBinding',
      name: 'dataBinding',
      component: () => import('@/components/DataBinding.vue')
    }
  ]
})

export default router
