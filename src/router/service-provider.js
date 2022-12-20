import LayoutService from '@/layouts/service-provider'
const routers =[
    {
        path: '/service-provider/home',
        meta:{layout:LayoutService},
        name: 'service-provider-home',
        component: () => import(/* webpackChunkName: "service-provider-home" */ '../views/service-provider/home/index.vue') 
    }
]
export default routers;