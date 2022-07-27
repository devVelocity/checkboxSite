import { createRouter, createWebHashHistory } from 'vue-router'
import HomePg from '../views/HomePg.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePg
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginPg.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
