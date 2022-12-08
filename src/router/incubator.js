import LayoutDefault from '@/layouts/default/index.vue'
const routers =[
    {
        path: '/incubator/home',
        meta:{layout:LayoutDefault},
        name: 'incubator-home',
        component: () => import(/* webpackChunkName: "incubator-home" */ '../views/incubator/home/index.vue') 
    },
    {
        path: '/incubator/subscribe',
        meta:{layout:LayoutDefault},
        name: 'incubator-subscribe',
        component: () => import(/* webpackChunkName: "incubator-subscribe" */ '../views/incubator/subscribe/index.vue') 
    }
]
export default routers;