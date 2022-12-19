import LayoutDefault from '@/layouts/default/index.vue'
import LayoutNetwork from '@/layouts/network/index.vue'
const routers =[
    {
        path: 'network/dashboard',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-dashboard',
        component: () => import(/* webpackChunkName: "network-dashboard" */ '../views/network/dashboard/index.vue') 
    },
    {
        path: 'network/menu-subscribe',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-menu-subscribe',
        component: () => import(/* webpackChunkName: "network-menu-subscribe" */ '../views/network/menu-subscribe/index.vue') 
    },
    {
        path: 'network/investment-project',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-investment-project',
        component: () => import(/* webpackChunkName: "network-investment-project" */ '../views/network/investment-project/index.vue') 
    },
    {
        path: 'network/blog',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-blog',
        component: () => import(/* webpackChunkName: "network-blog" */ '../views/network/blog/index.vue') 
    },
    {
        path: 'network/exhibitions',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-exhibitions',
        component: () => import(/* webpackChunkName: "network-exhibitions" */ '../views/network/exhibitions/index.vue') 
    },
    {
        path: 'network/offers',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-offers',
        component: () => import(/* webpackChunkName: "network-offers" */ '../views/network/offers/index.vue') 
    },
    {
        path: 'network/service-provider-member',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-service-provider-member',
        component: () => import(/* webpackChunkName: "network-service-provider-member" */ '../views/network/service-provider-member/index.vue') 
    },
    {
        path: 'network/member-network',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-member-network',
        component: () => import(/* webpackChunkName: "network-member-network" */ '../views/network/member-network/index.vue') 
    },
    {
        path: 'network/models',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-models',
        component: () => import(/* webpackChunkName: "network-models" */ '../views/network/models/index.vue') 
    },
    {
        path: 'network/models/:id',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-model-show',
        component: () => import(/* webpackChunkName: "network-model-show" */ '../views/network/models/show/index.vue') 
    },
    {
        path: 'network/learning-meetings',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-learning-meetings',
        component: () => import(/* webpackChunkName: "network-learning-meetings" */ '../views/network/learning-meetings/index.vue') 
    },
    {
        path: 'network/control-mamber-partner',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-control-mamber-partner',
        component: () => import(/* webpackChunkName: "network-control-mamber-partner" */ '../views/network/control-mamber-partner/index.vue') 
    },
    {
        path: 'network/home',
        meta:{layout:LayoutNetwork},
        name: 'network-home',
        component: () => import(/* webpackChunkName: "network-home" */ '../views/network/home/index.vue') 
    },
    {
        path: 'network/subscribe',
        meta:{layout:LayoutNetwork},
        name: 'network-subscribe',
        component: () => import(/* webpackChunkName: "network-subscribe" */ '../views/network/subscribe/index.vue') 
    },
    {
        path: 'network/subscribe/finish',
        meta:{layout:LayoutNetwork},
        name: 'netwoc="../rk-subscribe-finish',
        component: () => import(/* webpackChunkName: "network-subscribe-finish" */ '../views/network/SubscribeFinish.vue') 
    },
    {
        path: 'my-financial-transactions',
        meta:{layout:LayoutNetwork},
        name: 'my-financial-transactions',
        component: () => import(/* webpackChunkName: "my-financial-transactions" */ '../views/common/my-financial-transactions/index.vue')
    },
    {
        path: 'register-networking',
        meta:{layout:LayoutNetwork},
        name: 'register-networking',
        component: () => import(/* webpackChunkName: "register-networking" */ '../views/network/register-networking/index.vue')
    }
]
export default routers;