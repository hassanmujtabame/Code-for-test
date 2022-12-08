import LayoutDefault from '@/layouts/default/index.vue'
const routers =[
    {
        path: '/service-provider/home',
        meta:{layout:LayoutDefault},
        name: 'service-provider-home',
        component: () => import(/* webpackChunkName: "service-provider-home" */ '../views/service-provider/home/index.vue') 
    }
]
export default routers;