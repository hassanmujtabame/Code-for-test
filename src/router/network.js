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
        meta:{layout:LayoutDefault},
        name: 'network-home',
        component: () => import(/* webpackChunkName: "network-home" */ '../views/network/home/index.vue') 
    },
    {
        path: 'network/subscribe',
        meta:{layout:LayoutDefault},
        name: 'network-subscribe',
        component: () => import(/* webpackChunkName: "network-subscribe" */ '../views/network/subscribe/index.vue') 
    },
    {
        path: 'network/subscribe/finish',
        meta:{layout:LayoutDefault},
        name: 'network-subscribe-finish',
        component: () => import(/* webpackChunkName: "network-subscribe-finish" */ '../views/network/SubscribeFinish.vue') 
    }
]
export default routers;