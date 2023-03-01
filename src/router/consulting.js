import LayoutDefault from '@/layouts/network/index.vue'
const routers =[
    {
        path: 'consulting/home',
        meta:{layout:LayoutDefault},
        name: 'consulting-home',
        component: () => import(/* webpackChunkName: "consulting-home" */ '../views/consulting/home/index.vue') 
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