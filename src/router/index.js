import { createRouter, createWebHashHistory } from 'vue-router'
import HomePg from '../views/HomePg.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePg
  },
  {
    path: '/board',
    name: 'board',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BoardPg.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
