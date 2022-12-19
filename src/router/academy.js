import LayoutDefault from '@/layouts/default/index.vue'
const routers =[
    {
        path: 'academy/home',
        meta:{layout:LayoutDefault},
        name: 'academy-home',
        component: () => import(/* webpackChunkName: "academy-home" */ '../views/academy/home/index.vue') 
    },
    {
        path: 'academy/learning-meetings',
        meta:{layout:LayoutDefault},
        name: 'academy-learning-meetings',
        component: () => import(/* webpackChunkName: "academy-learning-meetings" */ '../views/academy/learning-meetings/index.vue') 
    },
    {
        path: 'academy/learning-meetings/:id',
        meta:{layout:LayoutDefault},
        name: 'academy-learning-meeting-show',
        component: () => import(/* webpackChunkName: "academy-learning-meeting-show" */ '../views/academy/meeting-page/index.vue') 
    },
    {
        path: 'academy/subscribe',
        meta:{layout:LayoutDefault},
        name: 'academy-subscribe',
        component: () => import(/* webpackChunkName: "academy-subscribe" */ '../views/academy/subscribe/index.vue') 
    }
]
export default routers;