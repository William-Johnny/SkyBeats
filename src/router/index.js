import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/settings.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search.vue')
    },
    {
      path: '/playlist',
      name: 'playlist',
      component: () => import('@/views/playlist.vue')
    }
  ]
})

export default router
