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
    path: '/game/:gameId/news/:newsId', // 具體的消息內頁
    name: 'NewsDetail',
    component: () => import('@/view/news.vue') // 你需要建立這個組件
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router