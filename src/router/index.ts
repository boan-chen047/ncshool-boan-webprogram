import { createRouter, createWebHistory } from 'vue-router'
// 使用 @ 符號確保路徑指向 src
import Home from '@/components/home.vue'
import Game from '@/components/game.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/game/:id', 
    name: 'GameDetail',
    component: () => import('@/components/game.vue') 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router