import { createRouter, createWebHistory } from 'vue-router'
import HomePg from '../views/HomePg.vue'
import BoardPg from '../views/BoardPg.vue'
import LoginPg from '../views/LoginPg.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePg
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPg
  },
  {
    path: '/board',
    name: 'board',
    component: BoardPg
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
