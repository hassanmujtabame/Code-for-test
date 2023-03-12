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
        path: 'consultants/:id',
        meta:{layout:LayoutDefault},
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
        path: 'consulting/fields/:id/consultants',
        meta:{layout:LayoutDefault},
        name: 'consulting-field-consultants',
        component: () => import(/* webpackChunkName: "consulting-field-consultants" */ '../views/consulting/fields/consultants/index.vue') 
    }
]
export default routers;