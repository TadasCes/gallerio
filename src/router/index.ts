import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue'),
  },
  {
    path: '/user-new',
    name: 'UserCreateNew',
    component: () => import('../views/UserCreateNew.vue'),
  },
  {
    path: '/user-edit/:name',
    name: 'UserEdit',
    component: () => import('../views/UserEdit.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
