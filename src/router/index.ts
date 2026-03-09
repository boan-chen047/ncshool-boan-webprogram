import { createRouter, createWebHistory } from 'vue-router'
// 使用 @ 符號確保路徑指向 src
import Home from '@/view/home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/game/:id', 
    name: 'GameDetail',
    component: () => import('@/view/game.vue') 
  },
  {
    path: '/news', 
    name: 'news',
    component: () => import('@/view/news.vue') 
  },
  {
    path: '/news', 
    name: 'news',
    component: () => import('@/view/news.vue') 
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router