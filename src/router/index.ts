import { TokenService } from '@/modules/tokenService';
import useUserService from '@/modules/useUserService';
import state from '@/state';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const { fetchOneUser } = useUserService();

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      public: true,
      onlyWhenLoggedOut: true,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {
      public: true,
      onlyWhenLoggedOut: true,
    },
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('../views/ForgotPassword.vue'),
    meta: {
      public: true,
      onlyWhenLoggedOut: true,
    },
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
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
  {
    path: '/profile/',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    beforeEnter: (to, from, next) => {
      const userLoggedIn: string | null = TokenService.getLoggedUserName()
      if (userLoggedIn) {
        if (!(userLoggedIn == state.userForm.name)) {
          fetchOneUser(userLoggedIn).then(() => {
            next();
          });
        } else {
          next();
        }
      }
    },
  },
  {
    path: '/profile/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue'),
  },
  {
    path: '/profile/gallery/edit-picture/',
    name: 'PictureEdit',
    component: () => import('../views/PictureEdit.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public);
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut);
  const loggedIn = TokenService.getToken();

  if (!isPublic && !loggedIn) {
    return next({
      path: '/login',
      query: { rediret: to.fullPath },
    });
  }

  if (loggedIn && onlyWhenLoggedOut) {
    return next('/');
  }

  next();
});

export default router;
