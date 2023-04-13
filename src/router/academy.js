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
        path: 'academy/departments/:id(\\d+)',
        meta:{layout:LayoutDefault},
        name: 'academy-department-show',
        component: () => import(/* webpackChunkName: "academy-department-show" */ '../views/academy/departments/show/index.vue') 
    },
    {
        path: 'academy/conversations',
        meta:{auth:true,layout:LayoutDefault},
        name: 'academy-conversations',
        component: () => import(/* webpackChunkName: "academy-conversations" */ '../views/common/messages/conversations/index.vue') 
    },
    {
        path: 'academy/my-profile',
        name: 'academy-my-profile',
        meta:{layout:LayoutDefault,auth:true},
        component: () => import(/* webpackChunkName: "academy-my-profile" */ '../views/common/my-profile/index.vue')
    },
    {
        path: 'academy/my-schedules',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-my-schedules',
        component: () => import(/* webpackChunkName: "academy-my-schedules" */ '../views/academy/my-schedules/index.vue') 
    },
    {
        path: 'academy/preview-profile',
        name: 'academy-preview-profile',
        meta:{layout:LayoutDefault,auth:true},
        component: () => import(/* webpackChunkName: "academy-preview-profile" */ '../views/academy/preview-profile/index.vue')
    },
    {
        path: 'academy/:id(\\d+)/show-profile',
        name: 'academy-show-profile',
        meta:{layout:LayoutDefault},
        component: () => import(/* webpackChunkName: "academy-show-profile" */ '../views/academy/show-profile/index.vue')
    },
    {
        path: 'academy/courses',
        meta:{layout:LayoutDefault},
        name: 'academy-courses',
        component: () => import(/* webpackChunkName: "academy-courses" */ '../views/academy/courses/index.vue') 
    },
    {
        path: 'academy/courses/:id(\\d+)',
        meta:{layout:LayoutDefault},
        name: 'academy-course-show',
        component: () => import(/* webpackChunkName: "academy-course-show" */ '../views/academy/courses/show/guest/index.vue') 
    },
    {
        path: 'academy/courses/:id(\\d+)/preview',
        meta:{layout:LayoutDefault},
        name: 'academy-course-preview-show',
        component: () => import(/* webpackChunkName: "academy-course-show" */ '../views/academy/courses/show/index.vue') 
    },
    {
        path: 'academy/courses/:id(\\d+)/add-exam',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-course-add-exam',
        component: () => import( '../views/academy/instructor/add-exam/index.vue') 
    },
    {
        path: 'academy/projects',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-projects',
        component: () => import(/* webpackChunkName: "academy-projects" */ '../views/academy/projects/index.vue') 
    },
    {
        path: 'academy/my-projects',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-my-projects',
        component: () => import(/* webpackChunkName: "academy-my-projects" */ '../views/academy/projects/mine/index.vue') 
    },
    {
        path: 'academy/my-projects/:id(\\d+)',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-my-project-show',
        component: () => import(/* webpackChunkName: "academy-my-project" */ '../views/academy/instructor/students/projects/index.vue') 
    },
    {
        path: 'academy/exams',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-exams',
        component: () => import(/* webpackChunkName: "academy-exams" */ '../views/academy/exams/index.vue') 
    },
    {
        path: 'academy/my-exams',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-your-exams',
        component: () => import(/* webpackChunkName: "academy-your-exams" */ '../views/academy/exams/mine/index.vue') 
    },
    {
        path: 'academy/my-exams/:id(\\d+)/do-exam',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-your-exams-do-exam',
        component: () => import(/* webpackChunkName: "academy-your-exams-do-exam" */ '../views/academy/your-exams/do-exam/index.vue') 
    },
    {
        path: 'academy/my-courses',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-your-courses',
        component: () => import(/* webpackChunkName: "academy-your-courses" */ '../views/academy/your-courses/index.vue') 
    },
    {
        path: 'academy/instructor/my-students/:id(\\d+)',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-instructor-your-student-show',
        component: () => import(/* webpackChunkName: "academy-instructor-your-student-show" */ '../views/academy/instructor/students/page/index.vue') 
    },
    {
        path: 'academy/instructor/my-courses',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-instructor-your-courses',
        component: () => import(/* webpackChunkName: "academy-instructor-your-courses" */ '../views/academy/instructor/your-courses/index.vue') 
    },
    {
        path: 'academy/instructor/register',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-instructor-register',
        component: () => import(/* webpackChunkName: "academy-instructor-register" */ '../views/academy/instructor/register/index.vue') 
    },
    {
        path: 'academy/instructor/exams',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-instructor-exams',
        component: () => import(/* webpackChunkName: "academy-instructor-exams" */ '../views/academy/instructor/exams/index.vue') 
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
        path: 'academy/blogs/:id(\\d+)',
        meta:{layout:LayoutDefault,auth:true},
        name: 'academy-blog-show',
        component: () => import(/* webpackChunkName: "academy-blog-show" */ '../views/academy/blogs/page/index.vue') 
    },
    {
        path: 'academy/my-certificates',
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
        path: 'academy/my-learning-meetings',
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
        path: 'academy/learning-meetings/:id(\\d+)',
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