import { createRouter, createWebHistory } from 'vue-router';
import home from '../components/home.vue';
import game from '../components/game.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/game',
    name: 'Game',
    component: game
  },
  { 
    path: '/:pathMatch(.*)*', 
    component: { template: '<div>404 找不到頁面 - 路由地圖可能沒讀到</div>' } 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
