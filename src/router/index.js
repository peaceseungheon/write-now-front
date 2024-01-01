import { createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/feed/feed-main.vue')
    },
    {
      path: '/register',
      component: () => import('@/views/users/register.vue')
    }
  ]
})

export default router