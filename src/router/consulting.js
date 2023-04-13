import LayoutDefault from '@/layouts/network/index.vue'
const routers =[
    {
        path: 'consulting/home',
        meta:{layout:LayoutDefault},
        name: 'consulting-home',
        component: () => import(/* webpackChunkName: "consulting-home" */ '../views/consulting/home/index.vue') 
    },
    {
        path: 'consulting/conversations',
        meta:{auth:true,layout:LayoutDefault},
        name: 'consulting-conversations',
        component: () => import(/* webpackChunkName: "consulting-conversations" */ '../views/common/messages/conversations/index.vue') 
    },
    {
        path: 'consulting/bookings',
        meta:{auth:true,layout:LayoutDefault},
        name: 'consulting-bookings',
        component: () => import(/* webpackChunkName: "consulting-books" */ '../views/consulting/bookings/index.vue') 
        
    },
    {
        path: 'consulting/requests',
        meta:{auth:true,layout:LayoutDefault},
        name: 'consulting-requests',
        component: () => import(/* webpackChunkName: "consulting-requests" */ '../views/consulting/requests/index.vue') 
        
    },
    {
        path: 'consulting/register',
        meta:{auth:true,layout:LayoutDefault},
        name: 'consulting-register',
        component: () => import(/* webpackChunkName: "consulting-register" */ '../views/consulting/register/index.vue') 
        
    },
    {
        path: 'consulting/my-schedules',
        meta:{auth:true,layout:LayoutDefault},
        name: 'consulting-my-schedules',
        component: () => import(/* webpackChunkName: "consulting-my-schedules" */ '../views/consulting/my-schedules/index.vue') 
        
    },
    {
        path: 'consulting/rates',
        meta:{auth:true,layout:LayoutDefault},
        name: 'consulting-rates',
        component: () => import(/* webpackChunkName: "consulting-rates" */ '../views/consulting/rates/index.vue') 
        
    },
    {
        path: 'consultants/:id(\\d+)',
        meta:{layout:LayoutDefault,auth:true},
        name: 'consultant-page',
        component: () => import(/* webpackChunkName: "consultant-page" */ '../views/consulting/consultant/index.vue') 
    },
    {
        path: 'consulting/consulting-page',
        meta:{layout:LayoutDefault},
        name: 'consulting-page',
        component: () => import(/* webpackChunkName: "consulting-page" */ '../views/consulting/consulting-page/index.vue') 
    },
    {
        path: 'consulting/fields',
        meta:{layout:LayoutDefault},
        name: 'consulting-fields',
        component: () => import(/* webpackChunkName: "consulting-fields" */ '../views/consulting/fields/index.vue') 
    },
    {
        path: 'consulting/fields/:id(\\d+)/consultants',
        meta:{layout:LayoutDefault},
        name: 'consulting-field-consultants',
        component: () => import(/* webpackChunkName: "consulting-field-consultants" */ '../views/consulting/fields/consultants/index.vue') 
    }
]
export default routers;