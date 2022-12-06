import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutDefault from '@/layouts/default/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    meta:{layout:LayoutDefault},
    component: () => import(/* webpackChunkName: "Index" */ '../views/Index/Index.vue')
  },
  {
    path: '/contact-us',
    meta:{layout:LayoutDefault},
    name: 'contact-us',
    component: () => import(/* webpackChunkName: "ContactUs" */ '../views/ContactUs.vue')
  },
  {
    path: '/login',
    meta:{layout:LayoutDefault},
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/auth/LoginView.vue')
  },
  {
    path: '/register',
    meta:{layout:LayoutDefault},
    name: 'register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/auth/RegisterView.vue')
  },
  {
    path: '/forget-password',
    meta:{layout:LayoutDefault},
    name: 'forget-password',
    component: () => import(/* webpackChunkName: "forget-password" */ '../views/auth/ForgetPassword.vue')
  },
  {
    path: '/forget-password-finish',
    meta:{layout:LayoutDefault},
    name: 'forget-password',
    component: () => import(/* webpackChunkName: "forget-password-finish" */ '../views/auth/ForgetPasswordFinish.vue')
  },
  {
    path: '/forget-password-edit',
    meta:{layout:LayoutDefault},
    name: 'forget-edit',
    component: () => import(/* webpackChunkName: "forget-password-edit" */ '../views/auth/ForgetPasswordEdit.vue')
  },
  {
    path: '/forget-password-check',
    meta:{layout:LayoutDefault},
    name: 'forget-check',
    component: () => import(/* webpackChunkName: "forget-password-check" */ '../views/auth/ForgetPasswordCheck.vue')
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: "parent-active",
  linkExactActiveClass: "active",
})

export default router
