import LayoutService from '@/layouts/service-provider'
const routers =[
    {
        path: '/service-provider/home',
        meta:{layout:LayoutService},
        name: 'service-provider-home',
        component: () => import(/* webpackChunkName: "service-provider-home" */ '../views/service-provider/home/index.vue') 
    },
    {
        path: '/service-provider/dashboard',
        meta:{layout:LayoutService},
        name: 'service-provider-dashboard',
        component: () => import(/* webpackChunkName: "service-provider-dashboard" */ '../views/service-provider/dashboard/index.vue') 
    },
    {
        path: '/service-provider/ready-services',
        meta:{layout:LayoutService},
        name: 'service-provider-ready-services',
        component: () => import(/* webpackChunkName: "service-provider-ready-services" */ '../views/service-provider/ready-services/index.vue') 
    }
]
export default routers;