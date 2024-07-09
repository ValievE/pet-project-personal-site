import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeView',
      component: HomeView,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/pages/main/main.vue')
        }
      ]
    }
  ]
})

export default router
