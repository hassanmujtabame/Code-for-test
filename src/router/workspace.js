import LayoutDefault from '@/layouts/network/index.vue'
const routers =[
    {
        path: 'workspaces/home',
        meta:{layout:LayoutDefault},
        name: 'workspaces-home',
        component: () => import(/* webpackChunkName: "workspaces-home" */ '../views/workspaces/home/index.vue') 
    },
    
]
export default routers;