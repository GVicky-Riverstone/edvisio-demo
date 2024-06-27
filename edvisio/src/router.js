import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: { name: 'Home' },
    name: 'Homepage',
  },
  {
    path: '/ping-pong',
    name: 'Ping Pong',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/pages/Homepage.vue'),
  },
]

let router = createRouter({
  history: createWebHistory('/edvisio'),
  routes,
})

export default router
