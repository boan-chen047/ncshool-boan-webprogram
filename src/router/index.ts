import { createRouter, createWebHistory } from 'vue-router'
// 使用 @ 符號確保路徑指向 src
import Home from '@/view/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/game/:id', 
    name: 'GameDetail',
    component: () => import('@/view/Game.vue') 
  },
  {
    path: '/news', 
    name: 'news',
    component: () => import('@/view/News.vue') 
  },
  {
    path: '/user', 
    name: 'userdata',
    component: () => import('@/view/User.vue') 
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router