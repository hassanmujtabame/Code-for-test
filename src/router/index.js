import Vue from 'vue'
import VueRouter from 'vue-router'
import middlewiare_auth from '@/middleware/auth'
import LayoutDefault from '@/layouts/default/index.vue'
import networkRoute from './network'
import academyRoute from './academy'
import incubatorRoute from './incubator'
import serviceRoute from './service-provider'
import consultingRoute from './consulting'
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
    meta:{layout:LayoutDefault,auth:false},
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/auth/LoginView.vue')
  },
  {
    path: '/register',
    meta:{layout:LayoutDefault,auth:false},
    name: 'register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/auth/RegisterView.vue')
  },
  {
    path: '/register-finish',
    meta:{layout:LayoutDefault},
    name: 'register-finish',
    component: () => import(/* webpackChunkName: "Register-finish" */ '../views/auth/RegisterFinish.vue')
  },
  {
    path: '/register-check',
    meta:{layout:LayoutDefault},
    name: 'register-check',
    component: () => import(/* webpackChunkName: "Register-check" */ '../views/auth/RegisterCheck.vue')
  }
  ,
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
  },
  {
    path: '/terms-and-conditions',
    meta:{layout:LayoutDefault},
    name: 'Terms-and-Conditions',
    component: () => import(/* webpackChunkName: "Terms-and-Conditions" */ '../views/policy/Terms-and-Conditions.vue')
  }
  ,
  {
    path: '/who-are-we',
    meta:{layout:LayoutDefault},
    name: 'who-are-we',
    component: () => import(/* webpackChunkName: "who-are-we" */ '../views/WhoAreWe.vue')
  },
  {
    path: '/common-questions',
    meta:{layout:LayoutDefault},
    name: 'common-questions',
    component: () => import(/* webpackChunkName: "common-questions" */ '../views/CommonQuestions.vue')
  },
  ...networkRoute,
  ...academyRoute,
  ...incubatorRoute,
  ...serviceRoute,
  ...consultingRoute
]

const router = new VueRouter({
  routes,
  linkActiveClass: "parent-active",
  linkExactActiveClass: "active",
})
router.beforeEach((to,from,next)=>{
  middlewiare_auth(to,from,next)
})
window.router = router;
export default router
