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
        path: 'academy/courses/:id',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-course-show',
        component: () => import(/* webpackChunkName: "academy-course-show" */ '../views/academy/courses/show/index.vue') 
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
        path: 'academy/your-exams',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-your-exams',
        component: () => import(/* webpackChunkName: "academy-your-exams" */ '../views/academy/your-exams/index.vue') 
    },
    {
        path: 'academy/your-exams/:id/do-exam',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-your-exams-do-exam',
        component: () => import(/* webpackChunkName: "academy-your-exams-do-exam" */ '../views/academy/your-exams/do-exam/index.vue') 
    },
    {
        path: 'academy/your-courses',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-your-courses',
        component: () => import(/* webpackChunkName: "academy-your-courses" */ '../views/academy/your-courses/index.vue') 
    },
    {
        path: 'academy/intructor/your-courses',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-intructor-your-courses',
        component: () => import(/* webpackChunkName: "academy-intructor-your-courses" */ '../views/academy/intructor/your-courses/index.vue') 
    },
    {
        path: 'academy/intructor/exams',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-intructor-exams',
        component: () => import(/* webpackChunkName: "academy-intructor-exams" */ '../views/academy/intructor/exams/index.vue') 
    },
    {
        path: 'academy/my-blogs',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-my-blogs',
        component: () => import(/* webpackChunkName: "academy-my-blogs" */ '../views/academy/blogs/mine/index.vue') 
    },
    {
        path: 'academy/blogs',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-blogs',
        component: () => import(/* webpackChunkName: "academy-blogs" */ '../views/academy/blogs/list/index.vue') 
    },
    {
        path: 'academy/blogs/:id',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-blog-show',
        component: () => import(/* webpackChunkName: "academy-blog-show" */ '../views/academy/blogs/page/index.vue') 
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
        path: 'academy/your-learning-meetings',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-your-learning-meetings',
        component: () => import(/* webpackChunkName: "academy-your-learning-meetings" */ '../views/academy/your-learning-meetings/index.vue') 
    },
    {
        path: 'academy/my-meetings',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-my-meetings',
        component: () => import(/* webpackChunkName: "academy-my-meetings" */ '../views/academy/learning-meetings/mine/index.vue') 
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
        component: () => import(/* webpackChunkName: "academy-learning-meeting-show" */ '../views/academy/learning-meetings/page/index.vue') 
    },
    {
        path: 'academy/my-financial-transactions',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-my-financial-transactions',
        component: () => import(/* webpackChunkName: "academy-my-financial-transactions" */ '../views/academy/my-financial-transactions/index.vue')
    },
    {
        path: 'academy/subscribe',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-subscribe',
        component: () => import(/* webpackChunkName: "academy-subscribe" */ '../views/academy/subscribe/index.vue') 
    }
]
export default routers;