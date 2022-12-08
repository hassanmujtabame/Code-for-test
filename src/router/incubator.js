import LayoutDefault from '@/layouts/default/index.vue'
const routers =[
    {
        path: '/incubator/home',
        meta:{layout:LayoutDefault},
        name: 'incubator-home',
        component: () => import(/* webpackChunkName: "incubator-home" */ '../views/incubator/home/index.vue') 
    }
]
export default routers;