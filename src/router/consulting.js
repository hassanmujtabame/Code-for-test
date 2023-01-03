import LayoutDefault from '@/layouts/default/index.vue'
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
    }
]
export default routers;