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
    }
]
export default routers;