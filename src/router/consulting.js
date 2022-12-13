import LayoutDefault from '@/layouts/default/index.vue'
const routers =[
    {
        path: 'consulting/home',
        meta:{layout:LayoutDefault},
        name: 'consulting-home',
        component: () => import(/* webpackChunkName: "consulting-home" */ '../views/consulting/home/index.vue') 
    }
]
export default routers;