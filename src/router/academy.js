import LayoutDefault from '@/layouts/default/index.vue'
const routers =[
    {
        path: '/academy/home',
        meta:{layout:LayoutDefault},
        name: 'academy-home',
        component: () => import(/* webpackChunkName: "academy-home" */ '../views/academy/home/index.vue') 
    }
]
export default routers;