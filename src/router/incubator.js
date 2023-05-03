import LayoutDefault from '@/layouts/incubator/index.vue'
const routers =[
    {
        path: 'incubator/home',
        meta:{layout:LayoutDefault},
        name: 'incubator-home',
        component: () => import(/* webpackChunkName: "incubator-home" */ '../views/incubator/home/index.vue') 
    },
    {
        path: 'incubator/contact-us',
        meta:{layout:LayoutDefault},
        name: 'incubator-contact-us',
        component: () => import(/* webpackChunkName: "ContactUs" */ '../views/main/contact-us/index.vue')
    },
    {
        path: 'incubator/dashboard',
        meta:{layout:LayoutDefault,auth:true},
        name: 'incubator-dashboard',
        component: () => import(/* webpackChunkName: "incubator-dashboard" */ '../views/incubator/dashboard/index.vue') 
    },
    {
        path: 'incubator/e-feasibility-study',
        name: 'incubator-e-feasibility-study',
        meta:{layout:LayoutDefault,auth:true},
        component: () => import(/* webpackChunkName: "incubator-e-feasibility-study" */ '../views/incubator/e-feasibility-study/index.vue')
      },
    {
        path: 'incubator/balance-charge',
        name: 'incubator-balance-charge',
        meta:{layout:LayoutDefault,auth:true},
        component: () => import(/* webpackChunkName: "incubator-balance-charge" */ '../views/incubator/balance-charge/index.vue')
      },
    {
        path: 'incubator/my-financial-transactions',
        meta:{layout:LayoutDefault,auth:true},
        name: 'incubator-my-financial-transactions',
        component: () => import(/* webpackChunkName: "incubator-my-financial-transactions" */ '../views/incubator/my-financial-transactions/index.vue')
    },
    {
        path: 'incubator/projects/:id',
        name: 'incubator-project-show',
        meta:{layout:LayoutDefault,auth:true},
        component: () => import(/* webpackChunkName: "incubator-project-show" */ '../views/incubator/projects/show/index.vue')
    },
    {
        path: 'incubator/preview-profile',
        name: 'incubator-preview-profile',
        meta:{layout:LayoutDefault,auth:true},
        component: () => import(/* webpackChunkName: "incubator-preview-profile" */ '../views/incubator/preview-profile/index.vue')
    },
    {
        path: 'incubator/my-profile',
        name: 'incubator-my-profile',
        meta:{layout:LayoutDefault,auth:true},
        component: () => import(/* webpackChunkName: "incubator-my-profile" */ '../views/common/my-profile/index.vue')
    },
    {
        path: 'incubator/:id(\\d+)/show-profile',
        name: 'incubator-show-profile',
        meta:{layout:LayoutDefault},
        component: () => import(/* webpackChunkName: "incubator-show-profile" */ '../views/incubator/show-profile/index.vue')
    },
    {
        path: 'incubator/incubator-business',
        meta:{layout:LayoutDefault,auth:true},
        name: 'incubator-incubator-business',
        component: () => import(/* webpackChunkName: "incubator-incubator-business" */ '../views/incubator/incubator-business/deparments') 
    },
    {
        path: 'incubator/incubator-business/:id',
        meta:{layout:LayoutDefault,auth:true},
        name: 'incubator-incubator-business-show',
        component: () => import(/* webpackChunkName: "incubator-incubator-business-show" */ '../views/incubator/incubator-business/show') 
    },
    {
        path: 'incubator/menu-subscribe',
        meta:{auth:true,layout:LayoutDefault},
        name: 'incubator-menu-subscribe',
        component: () => import(/* webpackChunkName: "incubator-menu-subscribe" */ '../views/incubator/menu-subscribe/index.vue') 
    },
    {
        path: 'incubator/subscribe',
        meta:{layout:LayoutDefault},
        name: 'incubator-subscribe',
        component: () => import(/* webpackChunkName: "incubator-subscribe" */ '../views/incubator/subscribe/index.vue') 
    },{
         path:'incubator/program-incubator/:id',
         meta:{layout:LayoutDefault},
         name: 'incubator-program-incubator',
         component: () => import(/* webpackChunkName: "incubator-program-incubator" */ '../views/incubator/program-incubator/index.vue') 
    }
]
export default routers;