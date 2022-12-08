import LayoutDefault from '@/layouts/default/index.vue'
const routers =[
    {
        path: '/network/home',
        meta:{layout:LayoutDefault},
        name: 'network-home',
        component: () => import(/* webpackChunkName: "network-home" */ '../views/network/home/index.vue') 
    },
    {
        path: '/network/subscribe',
        meta:{layout:LayoutDefault},
        name: 'network-subscribe',
        component: () => import(/* webpackChunkName: "network-subscribe" */ '../views/network/subscribe/index.vue') 
    },
    {
        path: '/network/subscribe/finish',
        meta:{layout:LayoutDefault},
        name: 'network-subscribe-finish',
        component: () => import(/* webpackChunkName: "network-subscribe-finish" */ '../views/network/SubscribeFinish.vue') 
    }
]
export default routers;