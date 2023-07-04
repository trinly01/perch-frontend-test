import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
// import Home from '@/pages/Home.vue';
// import PostDetail from '@/pages/PostDetail.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/post/:id',
    name: 'PostDetail',
    component: () => import('@/pages/PostDetail.vue'),
    props: true,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;