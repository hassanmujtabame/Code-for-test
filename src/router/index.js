import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFoundPage from '../views/main/pages/404.vue'
import middlewiare_auth from '@/middleware/auth'
import LayoutDefault from '@/layouts/default/index.vue'
import networkRoute from './network'
import academyRoute from './academy'
import incubatorRoute from './incubator'
import serviceRoute from './service-provider'
import consultingRoute from './consulting'
import Cookies from 'js-cookie'
import VueMeta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(VueMeta,{
  keyName: 'metaInfo',
  //tagIDKeyName: 'hid'
})

let lang= Cookies.get('i18n_lang') || 'ar';
const routes = [
  {
    path:'/',redirect:`${lang}`,
    name:'main-router'
  },
  {
    path:'/:lang(ar|en)',
    component: () => import(/* webpackChunkName: "rout" */ '../views/route.vue'),
  children:[

  {
    path: '/',
    name: 'index',
    meta:{layout:LayoutDefault},
    component: () => import(/* webpackChunkName: "Index" */ '../views/main/home/index.vue')
  },
  {
    path: 'my-profile',
    name: 'my-profile',
    meta:{layout:LayoutDefault,auth:true},
    component: () => import(/* webpackChunkName: "my-profile" */ '../views/common/my-profile/index.vue')
  },
  {
    path: 'checkout-success',
    name: 'checkout-success',
    meta:{layout:LayoutDefault,auth:true},
    component: () => import(/* webpackChunkName: "checkout-success" */ '../views/main/checkout/index-success.vue')
  },
  {
    path: 'checkout-fail',
    name: 'checkout-fail',
    meta:{layout:LayoutDefault,auth:true},
    component: () => import(/* webpackChunkName: "checkout-fail" */ '../views/main/checkout/index-fail.vue')
  },
  {
    path: 'show-profile/:id',
    name: 'show-profile',
    meta:{layout:LayoutDefault},
    component: () => import(/* webpackChunkName: "show-profile" */ '../views/common/show-profile/index.vue')
  },
  {
    path: 'preview-profile',
    name: 'preview-profile',
    meta:{layout:LayoutDefault,auth:true},
    component: () => import(/* webpackChunkName: "preview-profile" */ '../views/common/preview-profile/index.vue')
  },
  {
    path: 'conversations',
    meta:{auth:true,layout:LayoutDefault},
    name: 'default-conversations',
    component: () => import(/* webpackChunkName: "default-conversations" */ '../views/common/messages/conversations/index.vue') 
},
  {
    path: 'balance-charge',
    name: 'balance-charge',
    meta:{layout:LayoutDefault,auth:true},
    component: () => import(/* webpackChunkName: "balance-charge" */ '../views/common/balance-charge/index.vue')
  },
  {
    path: 'check-out',
    name: 'check-out',
    meta:{layout:LayoutDefault,auth:true},
    component: () => import(/* webpackChunkName: "check-out" */ '../views/common/check-out/index.vue')
  },
  {
    path: 'test',
    name: 'test',
    meta:{layout:LayoutDefault},
    component: () => import(/* webpackChunkName: "test" */ '../views/test/index.vue')
  },
  {
    path: 'test/:page',
    name: 'test-page',
    meta:{layout:LayoutDefault},
    component: () => import(/* webpackChunkName: "test" */ '../views/test/index.vue')
  },
  {
    path: 'test2',
    name: 'test2',
    meta:{},
    component: () => import(/* webpackChunkName: "test2" */ '../views/test/index2.vue')
  },
  {
    path: 'test2/:page',
    name: 'test2-page',
    meta:{},
    component: () => import(/* webpackChunkName: "test2" */ '../views/test/index2.vue')
  },
  {
    path: 'contact-us',
    meta:{layout:LayoutDefault},
    name: 'contact-us',
    component: () => import(/* webpackChunkName: "ContactUs" */ '../views/main/contact-us/index.vue')
  },
  {
    path: 'login',
    meta:{layout:LayoutDefault,auth:false},
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/main/auth/login/index.vue')
  },
  {
    path: 'register',
    meta:{layout:LayoutDefault,auth:false},
    name: 'register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/main/auth/register/index.vue')
  },
  {
    path: 'forget-password',
    meta:{layout:LayoutDefault,auth:false},
    name: 'forget-password',
    component: () => import(/* webpackChunkName: "forget-password" */ '../views/main/auth/forget-password/index.vue')
  },
  {
    path: 'change-password',
    meta:{layout:LayoutDefault,auth:true},
    name: 'change-password',
    component: () => import(/* webpackChunkName: "change-password" */ '../views/main/auth/change-password/index.vue')
  },
  {
    path: 'terms-and-conditions',
    meta:{layout:LayoutDefault},
    name: 'Terms-and-Conditions',
    component: () => import(/* webpackChunkName: "Terms-and-Conditions" */ '../views/main/policy/Terms-and-Conditions.vue')
  }
  ,
  {
    path: 'who-are-we',
    meta:{layout:LayoutDefault},
    name: 'who-are-we',
    component: () => import(/* webpackChunkName: "who-are-we" */ '../views/main/WhoAreWe.vue')
  },
  {
    path: 'common-questions',
    meta:{layout:LayoutDefault},
    name: 'common-questions',
    component: () => import(/* webpackChunkName: "common-questions" */ '../views/main/CommonQuestions.vue')
  },
  ...networkRoute,
  ...academyRoute,
  ...incubatorRoute,
  ...serviceRoute,
  ...consultingRoute 
]
},
{ 
  path: '/:any(.*)*',
  meta:{layout:LayoutDefault},
  component:NotFoundPage,
  name: 'NotFound'
}
]

const router = new VueRouter({
  mode:'history',
  routes,
  scrollBehavior(/*to, from, savedPosition*/) {
    // always scroll to top
    return { x: 0, y: 0 }
  },
  linkActiveClass: "parent-active",
  linkExactActiveClass: "active",
})
router.beforeEach((to,from,next)=>{
  //console.mylog('from',from)
  window.store.dispatch('core/setLoading',true)
  //window.scrollTo(0, 0)
 if(to.params.lang && ["ar","en"].includes(to.params.lang)){
  Cookies.set('i18n_lang',to.params.lang)
 }
  middlewiare_auth(to,from,next)
})
router.afterEach(()=>{
  console.mylog('afterEach',window.store)
  window.store.dispatch('core/setLoading',false)
})
window.router = router;
export default router
