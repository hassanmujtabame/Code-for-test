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
    },
    {
        path: '/service-provider/show-services',
        meta:{layout:LayoutService},
        name: 'service-provider-show-services',
        component: () => import(/* webpackChunkName: "service-provider-show-services" */ '../views/service-provider/show-services/index.vue') 
    },
    {
        path: '/service-provider/services-online',
        meta:{layout:LayoutService},
        name: 'service-provider-services-online',
        component: () => import(/* webpackChunkName: "service-provider-services-online" */ '../views/service-provider/services-online/index.vue') 
    }
]
export default routers;