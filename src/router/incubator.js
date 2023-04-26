import LayoutDefault from '@/layouts/incubator/index.vue'
const routers =[
    {
        path: 'incubator/home',
        meta:{layout:LayoutDefault},
        name: 'incubator-home',
        component: () => import(/* webpackChunkName: "incubator-home" */ '../views/incubator/home/index.vue') 
    },
    {
        path: 'incubator/dashboard',
        meta:{layout:LayoutDefault,auth:true},
        name: 'incubator-dashboard',
        component: () => import(/* webpackChunkName: "incubator-dashboard" */ '../views/incubator/dashboard/index.vue') 
    },
    {
        path: 'incubator/subscribe',
        meta:{layout:LayoutDefault},
        name: 'incubator-subscribe',
        component: () => import(/* webpackChunkName: "incubator-subscribe" */ '../views/incubator/subscribe/index.vue') 
    },{
         path:'incubator/program-incubator/:id',
         meta:{layout:LayoutDefault},
         name: 'incubator-program-incubator',
         component: () => import(/* webpackChunkName: "incubator-program-incubator" */ '../views/incubator/program-incubator/index.vue') 
    }
]
export default routers;