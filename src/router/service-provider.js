import LayoutService from '@/layouts/service-provider'
const routers =[
    {
        path: 'service-provider/home',
        meta:{layout:LayoutService},
        name: 'service-provider-home',
        component: () => import(/* webpackChunkName: "service-provider-home" */ '../views/service-provider/home/index.vue') 
    },
    {
        path: 'service-provider/conversations',
        meta:{auth:true,layout:LayoutService},
        name: 'service-provider-conversations',
        component: () => import(/* webpackChunkName: "service-provider-conversations" */ '../views/common/messages/conversations/index.vue') 
    },
    {
        path: 'service-provider/graduate-riadiat',
        meta:{layout:LayoutService},
        name: 'service-provider-graduate-riadiat',
        component: () => import(/* webpackChunkName: "service-provider-graduate-riadiat" */ '../views/service-provider/graduate-riadiat/index.vue') 
    },
    {
        path: 'service-provider/my-profile',
        name: 'service-provider-my-profile',
        meta:{layout:LayoutService,auth:true},
        component: () => import(/* webpackChunkName: "service-provider-my-profile" */ '../views/common/my-profile/index.vue')
    },
    {
        path: 'service-provider/preview-profile',
        name: 'service-provider-preview-profile',
        meta:{layout:LayoutService,auth:true},
        component: () => import(/* webpackChunkName: "service-provider-preview-profile" */ '../views/service-provider/preview-profile/index.vue')
    },
    {
        path: 'service-provider/subscribe',
        meta:{layout:LayoutService,auth:true},
        name: 'service-provider-subscribe',
        component: () => import(/* webpackChunkName: "service-provider-subscribe" */ '../views/service-provider/subscribe/index.vue') 
    },
    {
        path: 'service-provider/:id/show-profile',
        meta:{layout:LayoutService,auth:true},
        name: 'service-provider-show-profile',
        component: () => import(/* webpackChunkName: "service-provider-show-profile" */ '../views/service-provider/show-profile/index.vue') 
    },
    {
        path: 'service-provider/my-purchases',
        meta:{layout:LayoutService,auth:true},
        name: 'service-provider-client-my-purchases',
        component: () => import(/* webpackChunkName: "service-provider-my-purchases" */ '../views/service-provider/client/my-purchases/index.vue') 
    },
    {
        path: 'service-provider/my-requests',
        meta:{layout:LayoutService,auth:true},
        name: 'service-provider-client-my-requests',
        component: () => import(/* webpackChunkName: "service-provider-my-requests" */ '../views/service-provider/client/my-requests/index.vue') 
    },
    {
        path: 'service-provider/my-requests/:id',
        meta:{layout:LayoutService,auth:true},
        name: 'service-provider-client-my-request-page',
        component: () => import(/* webpackChunkName: "service-provider-my-request-page" */ '../views/service-provider/client/my-request-page/index.vue') 
    },
    {
        path: 'service-provider/my-schedules',
        meta:{layout:LayoutService,auth:true},
        name: 'service-provider-my-schedules',
        component: () => import(/* webpackChunkName: "service-provider-my-schedules" */ '../views/service-provider/my-schedules/index.vue') 
    },
    {
        path: 'service-provider/my-schedules/:id',
        meta:{layout:LayoutService,auth:true},
        name: 'service-provider-my-schedule-show',
        component: () => import(/* webpackChunkName: "service-provider-my-schedule-show" */ '../views/service-provider/my-schedules/page/index.vue') 
    },
    {
        path: 'service-provider/control-jobs',
        meta:{layout:LayoutService},
        name: 'service-provider-control-jobs',
        component: () => import(/* webpackChunkName: "service-provider-control-jobs" */ '../views/service-provider/control-jobs/index.vue') 
    },
    {
        path: 'service-provider/jobs',
        meta:{layout:LayoutService},
        name: 'service-provider-jobs',
        component: () => import(/* webpackChunkName: "service-provider-jobs" */ '../views/service-provider/jobs/index.vue') 
    },
    {
        path: 'service-provider/jobs/:id',
        meta:{layout:LayoutService,auth:true},
        name: 'service-provider-job-show',
        component: () => import(/* webpackChunkName: "service-provider-job-show" */ '../views/service-provider/jobs/page/index.vue') 
    },
    {
        path: 'service-provider/dashboard',
        meta:{layout:LayoutService,auth:true},
        name: 'service-provider-dashboard',
        component: () => import(/* webpackChunkName: "service-provider-dashboard" */ '../views/service-provider/dashboard/index.vue') 
    },
    {
        path: 'service-provider/my-offers',
        meta:{layout:LayoutService,auth:true},
        name: 'service-provider-my-offers',
        component: () => import(/* webpackChunkName: "service-provider-my-offers" */ '../views/service-provider/page-my-offers/index.vue') 
    },
    {
        path: 'service-provider/my-ready-services',
        meta:{layout:LayoutService},
        name: 'service-provider-my-ready-services',
        component: () => import(/* webpackChunkName: "service-provider-my-ready-services" */ '../views/service-provider/ready-services/mine/index.vue') 
    },
    {
        path: 'service-provider/ready-services',
        meta:{layout:LayoutService},
        name: 'service-provider-ready-services',
        component: () => import(/* webpackChunkName: "service-provider-ready-services" */ '../views/service-provider/ready-services/index.vue') 
    },
    {
        path: 'service-provider/ready-services/:id',
        meta:{layout:LayoutService,auth:true},
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
        meta:{layout:LayoutService,auth:true},
        name: 'service-provider-show-service-page',
        component: () => import(/* webpackChunkName: "service-provider-show-service-page" */ '../views/service-provider/show-services/page/index.vue') 
    },
    {
        path: 'service-provider/show-services/:id/progress',
        meta:{layout:LayoutService,auth:true},
        name: 'service-provider-show-service-in-process',
        component: () => import(/* webpackChunkName: "service-provider-show-service-page-progress" */ '../views/service-provider/show-services/request-page-in-progress/index.vue') 
    },
    {
        path: 'service-provider/request-purchase-services',
        meta:{layout:LayoutService,auth:true},
        name: 'service-provider-request-purchase-services',
        component: () => import(/* webpackChunkName: "service-provider-request-purchase" */ '../views/service-provider/ready-services/request-purchase-services/index.vue') 
    },
    {
        path: 'service-provider/request-purchase-services/:id/progress',
        meta:{layout:LayoutService,auth:true},
        name: 'service-provider-request-purchase-service-progress',
        component: () => import(/* webpackChunkName: "service-provider-request-purchase-progress" */ '../views/service-provider/ready-services/request-purchase-services/progress/index.vue') 
    },
    {
        path: 'service-provider/request-purchase-services/:id',
        meta:{layout:LayoutService,auth:true},
        name: 'service-provider-request-purchase-service-show',
        component: () => import(/* webpackChunkName: "service-provider-request-purchase-show" */ '../views/service-provider/ready-services/request-purchase-services/show-request.vue') 
    },
    /*{
        path: 'service-provider/show-services/:id',
        meta:{layout:LayoutService},
        name: 'service-provider-page-service',
        component: () => import( '../views/service-provider/page-service/index.vue') 
    },*/
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
    },
    {
        path: 'service-provider/my-financial-transactions',
        meta:{layout:LayoutService,auth:true},
        name: 'service-provider-my-financial-transactions',
        component: () => import(/* webpackChunkName: "service-provider-my-financial-transactions" */ '../views/service-provider/my-financial-transactions/index.vue')
    },
    {
        path: 'service-provider/balance-charge',
        name: 'service-provider-balance-charge',
        meta:{layout:LayoutService,auth:true},
        component: () => import(/* webpackChunkName: "service-provider-balance-charge" */ '../views/service-provider/balance-charge/index.vue')
      }, 
      {
        path: 'service-provider/rate-my-services',
        name: 'service-provider-rate-my-service',
        meta:{layout:LayoutService,auth:true},
        component: () => import(/* webpackChunkName: "service-provider-rate-my-service" */ '../views/service-provider/page-rate-my-services/index.vue')
      },
]
export default routers;