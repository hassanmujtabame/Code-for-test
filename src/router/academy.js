import LayoutDefault from '@/layouts/academy/index.vue'
const routers =[
    {
        path: 'academy/home',
        meta:{layout:LayoutDefault},
        name: 'academy-home',
        component: () => import(/* webpackChunkName: "academy-home" */ '../views/academy/home/index.vue') 
    },
    {
        path: 'academy/dashboard',
        meta:{layout:LayoutDefault},
        name: 'academy-dashboard',
        component: () => import(/* webpackChunkName: "academy-dashboard" */ '../views/academy/dashboard/index.vue') 
    },
    {
        path: 'academy/courses',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-courses',
        component: () => import(/* webpackChunkName: "academy-courses" */ '../views/academy/courses/index.vue') 
    },
    {
        path: 'academy/projects',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-projects',
        component: () => import(/* webpackChunkName: "academy-projects" */ '../views/academy/projects/index.vue') 
    },
    {
        path: 'academy/exams',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-exams',
        component: () => import(/* webpackChunkName: "academy-exams" */ '../views/academy/exams/index.vue') 
    },
    {
        path: 'academy/your-courses',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-your-courses',
        component: () => import(/* webpackChunkName: "academy-your-courses" */ '../views/academy/your-courses/index.vue') 
    },
    {
        path: 'academy/your-certificates',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-your-certificates',
        component: () => import(/* webpackChunkName: "academy-your-certificates" */ '../views/academy/your-certificates/index.vue') 
    },
    {
        path: 'academy/meetings',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-meetings',
        component: () => import(/* webpackChunkName: "academy-meetings" */ '../views/academy/meetings/index.vue') 
    },
    {
        path: 'academy/learning-meetings',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-learning-meetings',
        component: () => import(/* webpackChunkName: "academy-learning-meetings" */ '../views/academy/learning-meetings/index.vue') 
    },
    {
        path: 'academy/learning-meetings/:id',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-learning-meeting-show',
        component: () => import(/* webpackChunkName: "academy-learning-meeting-show" */ '../views/academy/meeting-page/index.vue') 
    },
    {
        path: 'academy/subscribe',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-subscribe',
        component: () => import(/* webpackChunkName: "academy-subscribe" */ '../views/academy/subscribe/index.vue') 
    }
]
export default routers;