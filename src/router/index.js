import { createRouter, createWebHistory } from 'vue-router'
const HomePg = () => import('../views/HomePg.vue')
const LoginPg = () => import('../views/LoginPg.vue')
const BoardPg = () => import('../views/BoardPg.vue')

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
