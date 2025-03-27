import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/berry',
      name: 'berry',
      component: () => import('../views/List.vue'),
    },
    {
      path: '/berry/:id',
      name: 'berry-detail',
      component: () => import('../views/Detail.vue'),
    },
    {
      path: '/berry/create',
      name: 'berry-create',
      component: () => import('../views/Form.vue'),
    },
    {
      path: '/berry/edit/:id',
      name: 'berry-edit',
      component: () => import('../views/Form.vue'),
    },
  ],
})

export default router
