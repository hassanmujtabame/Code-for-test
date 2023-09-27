import LayoutDefault from '@/layouts/academy/index.vue';

const routers = [
	{
		path: "academy/home",
		meta: { layout: LayoutDefault, title: "academy home" },
		name: "academy-home",
		component: () =>
			import(
				/* webpackChunkName: "academy-home" */ "../views/academy/home/index.vue"
			),
	},
	{
		path: "academy/contact-us",
		meta: { layout: LayoutDefault, title: "Contact Us" },
		name: "academy-contact-us",
		component: () =>
			import(
				/* webpackChunkName: "ContactUs" */ "../views/main/contact-us/index.vue"
			),
	},
	{
		path: "academy/dashboard",
		meta: { layout: LayoutDefault, auth: true, title: "Dashboard" },
		name: "academy-dashboard",
		component: () =>
			import(
				/* webpackChunkName: "academy-dashboard" */ "../views/academy/dashboard/index.vue"
			),
	},
	{
		path: "academy/departments/:id(\\d+)",
		meta: { layout: LayoutDefault, title: "Department" },
		name: "academy-department-show",
		component: () =>
			import(
				/* webpackChunkName: "academy-department-show" */ "../views/academy/departments/show/index.vue"
			),
	},
	{
		path: "academy/departments/:id(\\d+)/courses",
		meta: { layout: LayoutDefault, title: "Department Courses" },
		name: "academy-department-courses",
		component: () =>
			import(
				/* webpackChunkName: "academy-department-courses" */ "../views/academy/departments/courses/index.vue"
			),
	},
	{
		path: "academy/conversations",
		meta: { auth: true, layout: LayoutDefault, title: "Conversations" },
		name: "academy-conversations",
		component: () =>
			import(
				/* webpackChunkName: "academy-conversations" */ "../views/common/messages/conversations/index.vue"
			),
	},
	{
		path: "academy/my-profile",
		name: "academy-my-profile",
		meta: { layout: LayoutDefault, auth: true, title: "My Profile" },
		component: () =>
			import(
				/* webpackChunkName: "academy-my-profile" */ "../views/common/my-profile/index.vue"
			),
	},
	// Add meta title to other routes...
	{
		path: "academy/my-schedules",
		meta: { layout: LayoutDefault, auth: true, title: "My Schedules" },
		name: "academy-my-schedules",
		component: () =>
			import(
				/* webpackChunkName: "academy-my-schedules" */ "../views/academy/my-schedules/index.vue"
			),
	},
	{
		path: "academy/my-schedules-details/:id(\\d+)",
		meta: { layout: LayoutDefault, title: "my schedules Details" },
		name: "academy-my-schedules-details",
		component: () =>
			import(
				/* webpackChunkName: "academy-my-schedules" */ "../views/academy/my-schedules/my-schedules-details.vue"
			),
	},
	{
		path: "academy/preview-profile",
		name: "academy-preview-profile",
		meta: { layout: LayoutDefault, auth: true, title: "Preview Profile" },
		component: () =>
			import(
				/* webpackChunkName: "academy-preview-profile" */ "../views/academy/preview-profile/index.vue"
			),
	},
	{
		path: "academy/:id(\\d+)/show-profile",
		name: "academy-show-profile",
		meta: { layout: LayoutDefault, title: "Show Profile" },
		component: () =>
			import(
				/* webpackChunkName: "academy-show-profile" */ "../views/academy/show-profile/index.vue"
			),
	},
	{
		path: "academy/courses",
		meta: { layout: LayoutDefault, title: "Courses" },
		name: "academy-courses",
		component: () =>
			import(
				/* webpackChunkName: "academy-courses" */ "../views/academy/courses/index.vue"
			),
	},
	{
		path: "academy/test3",
		meta: { layout: LayoutDefault, title: "Courses" },
		name: "academy-test3",
		component: () =>
			import(
				/* webpackChunkName: "academy-courses" */ "../views/academy/test3.vue"
			),
	},
	{
		path: "academy/test5",
		meta: { layout: LayoutDefault, title: "Courses" },
		name: "academy-test5",
		component: () =>
			import(
				/* webpackChunkName: "academy-courses" */ "../views/academy/test5.vue"
			),
	},
	{
		path: "academy/test6",
		meta: { layout: LayoutDefault, title: "Courses" },
		name: "academy-test6",
		component: () =>
			import(
				/* webpackChunkName: "academy-courses" */ "../views/academy/test6.vue"
			),
	},
	{
		path: "academy/test4",
		meta: { layout: LayoutDefault, title: "Courses" },
		name: "academy-test4",
		component: () =>
			import(
				/* webpackChunkName: "academy-courses" */ "../views/academy/test4.vue"
			),
	},
	{
		path: "academy/courses/:id(\\d+)",
		meta: { layout: LayoutDefault, title: "Course Show" },
		name: "academy-course-show",
		component: () =>
			import(
				/* webpackChunkName: "academy-course-show" */ "../views/academy/courses/show/guest/index.vue"
			),
	},
	{
		path: "academy/courses/:id(\\d+)/preview",
		meta: { layout: LayoutDefault, title: "Course Preview" },
		name: "academy-course-preview-show",
		component: () =>
			import(
				/* webpackChunkName: "academy-course-show" */ "../views/academy/courses/show/index.vue"
			),
	},
	{
		path: "academy/courses/:id(\\d+)/add-exam",
		meta: { layout: LayoutDefault, auth: true, title: "Add Exam" },
		name: "academy-course-add-exam",
		component: () => import("../views/academy/instructor/add-exam/index.vue"),
	},
	{
		path: "academy/projects",
		meta: { layout: LayoutDefault, auth: true, title: "Projects" },
		name: "academy-projects",
		component: () =>
			import(
				/* webpackChunkName: "academy-projects" */ "../views/academy/projects/index.vue"
			),
	},
	// Add meta title to the remaining routes...
	{
		path: "academy/my-projects",
		meta: { layout: LayoutDefault, auth: true, title: "My Projects" },
		name: "academy-my-projects",
		component: () =>
			import(
				/* webpackChunkName: "academy-my-projects" */ "../views/academy/projects/mine/index.vue"
			),
	},
	{
		path: "academy/my-projects/:id(\\d+)",
		meta: { layout: LayoutDefault, auth: true, title: "My Project Show" },
		name: "academy-my-project-show",
		component: () =>
			import(
				/* webpackChunkName: "academy-my-project" */ "../views/academy/instructor/students/projects/index.vue"
			),
	},
	{
		path: "academy/exams",
		meta: { layout: LayoutDefault, auth: true, title: "Exams" },
		name: "academy-exams",
		component: () =>
			import(
				/* webpackChunkName: "academy-exams" */ "../views/academy/exams/index.vue"
			),
	},
	{
		path: "academy/my-exams",
		meta: { layout: LayoutDefault, auth: true, title: "My Exams" },
		name: "academy-your-exams",
		component: () =>
			import(
				/* webpackChunkName: "academy-your-exams" */ "../views/academy/exams/mine/index.vue"
			),
	},
	{
		path: "academy/my-exams/:id(\\d+)/do-exam",
		meta: { layout: LayoutDefault, auth: true, title: "Do Exam" },
		name: "academy-your-exams-do-exam",
		component: () =>
			import(
				/* webpackChunkName: "academy-your-exams-do-exam" */ "../views/academy/your-exams/do-exam/index.vue"
			),
	},
	{
		path: "academy/my-courses",
		meta: { layout: LayoutDefault, auth: true, title: "My Courses" },
		name: "academy-your-courses",
		component: () =>
			import(
				/* webpackChunkName: "academy-your-courses" */ "../views/academy/your-courses/index.vue"
			),
	},
	{
		path: "academy/instructor/my-students/:id(\\d+)",
		meta: { layout: LayoutDefault, auth: true, title: "My Student Show" },
		name: "academy-instructor-your-student-show",
		component: () =>
			import(
				/* webpackChunkName: "academy-instructor-your-student-show" */ "../views/academy/instructor/students/page/index.vue"
			),
	},
	{
		path: "academy/instructor/my-courses",
		meta: { layout: LayoutDefault, auth: true, title: "My Courses" },
		name: "academy-instructor-your-courses",
		component: () =>
			import(
				/* webpackChunkName: "academy-instructor-your-courses" */ "../views/academy/instructor/your-courses/index.vue"
			),
	},
	{
		path: "academy/instructor/register",
		meta: { layout: LayoutDefault, auth: true, title: "Instructor Register" },
		name: "academy-instructor-register",
		component: () =>
			import(
				/* webpackChunkName: "academy-instructor-register" */ "../views/academy/instructor/register/index.vue"
			),
	},
	{
		path: "academy/instructor/exams",
		meta: { layout: LayoutDefault, auth: true, title: "Instructor Exams" },
		name: "academy-instructor-exams",
		component: () =>
			import(
				/* webpackChunkName: "academy-instructor-exams" */ "../views/academy/instructor/exams/index.vue"
			),
	},
	{
		path: "academy/my-blogs",
		meta: { layout: LayoutDefault, auth: true, title: "My Blogs" },
		name: "academy-my-blogs",
		component: () =>
			import(
				/* webpackChunkName: "academy-my-blogs" */ "../views/academy/blogs/mine/index.vue"
			),
	},
	{
		path: "academy/blogs",
		meta: { layout: LayoutDefault, auth: true, title: "Blogs" },
		name: "academy-blogs",
		component: () =>
			import(
				/* webpackChunkName: "academy-blogs" */ "../views/academy/blogs/list/index.vue"
			),
	},
	{
		path: "academy/blogs/:id(\\d+)",
		meta: { layout: LayoutDefault, auth: true, title: "Blog Show" },
		name: "academy-blog-show",
		component: () =>
			import(
				/* webpackChunkName: "academy-blog-show" */ "../views/academy/blogs/page/index.vue"
			),
	},
	{
		path: "academy/my-certificates",
		meta: { layout: LayoutDefault, auth: true, title: "My Certificates" },
		name: "academy-your-certificates",
		component: () =>
			import(
				/* webpackChunkName: "academy-your-certificates" */ "../views/academy/your-certificates/index.vue"
			),
	},
	{
		path: "academy/meetings",
		meta: { layout: LayoutDefault, auth: true, title: "Meetings" },
		name: "academy-meetings",
		component: () =>
			import(
				/* webpackChunkName: "academy-meetings" */ "../views/academy/meetings/index.vue"
			),
	},
	{
		path: "academy/my-learning-meetings",
		meta: { layout: LayoutDefault, auth: true, title: "My Learning Meetings" },
		name: "academy-your-learning-meetings",
		component: () =>
			import(
				/* webpackChunkName: "academy-your-learning-meetings" */ "../views/academy/your-learning-meetings/index.vue"
			),
	},
	{
		path: "academy/my-meetings",
		meta: { layout: LayoutDefault, auth: true, title: "My Meetings" },
		name: "academy-my-meetings",
		component: () =>
			import(
				/* webpackChunkName: "academy-my-meetings" */ "../views/academy/learning-meetings/mine/index.vue"
			),
	},
	{
		path: "academy/learning-meetings",
		meta: { layout: LayoutDefault, auth: true, title: "Learning Meetings" },
		name: "academy-learning-meetings",
		component: () =>
			import(
				/* webpackChunkName: "academy-learning-meetings" */ "../views/academy/learning-meetings/index.vue"
			),
	},
	{
		path: "academy/learning-meetings/:id(\\d+)",
		meta: { layout: LayoutDefault, auth: true, title: "Learning Meeting Show" },
		name: "academy-learning-meeting-show",
		component: () =>
			import(
				/* webpackChunkName: "academy-learning-meeting-show" */ "../views/academy/learning-meetings/page/index.vue"
			),
	},
	{
		path: "academy/my-financial-transactions",
		meta: {
			layout: LayoutDefault,
			auth: true,
			title: "My Financial Transactions",
		},
		name: "academy-my-financial-transactions",
		component: () =>
			import(
				/* webpackChunkName: "academy-my-financial-transactions" */ "../views/academy/my-financial-transactions/index.vue"
			),
	},
	{
		path: "academy/menu-subscribe",
		meta: { auth: true, layout: LayoutDefault, title: "Menu Subscribe" },
		name: "academy-menu-subscribe",
		component: () =>
			import(
				/* webpackChunkName: "academy-menu-subscribe" */ "../views/academy/menu-subscribe/index.vue"
			),
	},
	{
		path: "academy/subscribe",
		meta: {
			layout: LayoutDefault,
			auth: true,
			title: "Subscribe",
			type: "academy",
		},
		name: "academy-subscribe",
		component: () =>
			import(
				/* webpackChunkName: "academy-subscribe" */ "../views/academy/subscribe/index.vue"
			),
	},
	{
		path: "academy/subscribe/finish",
		meta: {
			layout: LayoutDefault,
			title: "Subscribe Finish",
			type: "academy",
		},
		name: "academy-subscribe-finish",
		component: () =>
			import(
				/* webpackChunkName: "academy-subscribe-finish" */ "../views/academy/SubscribeFinish.vue"
			),
	},
];

export default routers;
