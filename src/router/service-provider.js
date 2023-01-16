import LayoutService from '@/layouts/service-provider'
const routers =[
    {
        path: 'service-provider/home',
        meta:{layout:LayoutService},
        name: 'service-provider-home',
        component: () => import(/* webpackChunkName: "service-provider-home" */ '../views/service-provider/home/index.vue') 
    },
    {
        path: 'service-provider/subscribe',
        meta:{layout:LayoutService},
        name: 'service-provider-subscribe',
        component: () => import(/* webpackChunkName: "service-provider-subscribe" */ '../views/service-provider/subscribe/index.vue') 
    },
    {
        path: 'service-provider/:id/show-profile',
        meta:{layout:LayoutService},
        name: 'service-provider-show-profile',
        component: () => import(/* webpackChunkName: "service-provider-show-profile" */ '../views/service-provider/show-profile/index.vue') 
    },
    {
        path: 'service-provider/request-purchase-services',
        meta:{layout:LayoutService},
        name: 'service-provider-request-purchase-services',
        component: () => import(/* webpackChunkName: "service-provider-request-purchase" */ '../views/service-provider/request-purchase-services/index.vue') 
    },
    {
        path: 'service-provider/my-schedule',
        meta:{layout:LayoutService},
        name: 'service-provider-my-schedule',
        component: () => import(/* webpackChunkName: "service-provider-my-schedule" */ '../views/service-provider/my-schedule/index.vue') 
    },
    {
        path: 'service-provider/jobs',
        meta:{layout:LayoutService},
        name: 'service-provider-jobs',
        component: () => import(/* webpackChunkName: "service-provider-jobs" */ '../views/service-provider/jobs/index.vue') 
    },
    {
        path: 'service-provider/job/:id',
        meta:{layout:LayoutService},
        name: 'service-provider-job-show',
        component: () => import(/* webpackChunkName: "service-provider-job-show" */ '../views/service-provider/job-page/index.vue') 
    },
    {
        path: 'service-provider/dashboard',
        meta:{layout:LayoutService},
        name: 'service-provider-dashboard',
        component: () => import(/* webpackChunkName: "service-provider-dashboard" */ '../views/service-provider/dashboard/index.vue') 
    },
    {
        path: 'service-provider/ready-services',
        meta:{layout:LayoutService},
        name: 'service-provider-ready-services',
        component: () => import(/* webpackChunkName: "service-provider-ready-services" */ '../views/service-provider/ready-services/index.vue') 
    },
    {
        path: 'service-provider/ready-services/:id',
        meta:{layout:LayoutService},
        name: 'service-provider-ready-service',
        component: () => import(/* webpackChunkName: "service-provider-page-service-ready" */ '../views/service-provider/page-service-ready/index.vue') 
    },
    {
        path: 'service-provider/show-services',
        meta:{layout:LayoutService},
        name: 'service-provider-show-services',
        component: () => import(/* webpackChunkName: "service-provider-show-services" */ '../views/service-provider/show-services/index.vue') 
    },
    {
        path: 'service-provider/show-services/:id',
        meta:{layout:LayoutService},
        name: 'service-provider-show-service-page',
        component: () => import(/* webpackChunkName: "service-provider-show-service-page" */ '../views/service-provider/show-services/page/index.vue') 
    },
    {
        path: 'service-provider/show-services/:id/progress',
        meta:{layout:LayoutService},
        name: 'service-provider-show-service-in-process',
        component: () => import(/* webpackChunkName: "service-provider-show-service-page-progress" */ '../views/service-provider/show-services/request-page-in-progress/index.vue') 
    },
    {
        path: 'service-provider/show-services/:id',
        meta:{layout:LayoutService},
        name: 'service-provider-page-service',
        component: () => import(/* webpackChunkName: "service-provider-page-service" */ '../views/service-provider/page-service/index.vue') 
    },
    {
        path: 'service-provider/menu-subscribe',
        meta:{layout:LayoutService,auth:true},
        name: 'service-provider-menu-subscribe',
        component: () => import(/* webpackChunkName: "service-provider-menu-subscribe" */ '../views/service-provider/menu-subscribe/index.vue') 
    },
    {
        path: 'service-provider/services-online',
        meta:{layout:LayoutService},
        name: 'service-provider-services-online',
        component: () => import(/* webpackChunkName: "service-provider-services-online" */ '../views/service-provider/services-online/index.vue') 
    },
    {
        path: 'service-provider/services-offline',
        meta:{layout:LayoutService},
        name: 'service-provider-services-offline',
        component: () => import(/* webpackChunkName: "service-provider-services-offline" */ '../views/service-provider/services-offline/index.vue') 
    }
]
export default routers;