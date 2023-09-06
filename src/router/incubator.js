import LayoutDefault from '@/layouts/incubator/index.vue'

const routers = [
	{
		path: "incubator/home",
		meta: { layout: LayoutDefault, title: "Home" },
		name: "incubator-home",
		component: () =>
			import(
				/* webpackChunkName: "incubator-home" */ "../views/incubator/home/index.vue"
			),
	},
	{
		path: "incubator/home",
		meta: { layout: LayoutDefault, title: "Home" },
		name: "incubator-home",
		component: () =>
			import(
				/* webpackChunkName: "incubator-home" */ "../views/incubator/home/index.vue"
			),
	},
	{
		path: "incubator/my-learning-meetings",
		meta: { layout: LayoutDefault, auth: true, title: "My Learning Meetings" },
		name: "incubator-your-learning-meetings",
		component: () =>
			import(
				/* webpackChunkName: "academy-your-learning-meetings" */ "../views/incubator/your-learning-meetings/index.vue"
			),
	},
	{
		path: "incubator/my-courses",
		meta: { layout: LayoutDefault, auth: true, title: "My Courses" },
		name: "incubator-your-courses",
		component: () =>
			import(
				/* webpackChunkName: "incubator-your-courses" */ "../views/incubator/your-courses/index.vue"
			),
	},
	{
		path: "incubator/contact-us",
		meta: { layout: LayoutDefault, title: "Contact Us" },
		name: "incubator-contact-us",
		component: () =>
			import(
				/* webpackChunkName: "ContactUs" */ "../views/main/contact-us/index.vue"
			),
	},
	{
		path: "incubator/dashboard",
		meta: { layout: LayoutDefault, auth: true, title: "Dashboard" },
		name: "incubator-dashboard",
		component: () =>
			import(
				/* webpackChunkName: "incubator-dashboard" */ "../views/incubator/dashboard/index.vue"
			),
	},
	{
		path: "incubator/e-feasibility-study",
		name: "incubator-e-feasibility-study",
		meta: { layout: LayoutDefault, auth: true, title: "E-Feasibility Study" },
		component: () =>
			import(
				/* webpackChunkName: "incubator-e-feasibility-study" */ "../views/incubator/e-feasibility-study/index.vue"
			),
	},
	{
		path: "incubator/balance-charge",
		name: "incubator-balance-charge",
		meta: { layout: LayoutDefault, auth: true, title: "Balance Charge" },
		component: () =>
			import(
				/* webpackChunkName: "incubator-balance-charge" */ "../views/incubator/balance-charge/index.vue"
			),
	},
	{
		path: "incubator/my-financial-transactions",
		meta: {
			layout: LayoutDefault,
			auth: true,
			title: "My Financial Transactions",
		},
		name: "incubator-my-financial-transactions",
		component: () =>
			import(
				/* webpackChunkName: "incubator-my-financial-transactions" */ "../views/incubator/my-financial-transactions/index.vue"
			),
	},
	{
		path: "incubator/projects/:id",
		name: "incubator-project-show",
		meta: { layout: LayoutDefault, auth: true, title: "Project" },
		component: () =>
			import(
				/* webpackChunkName: "incubator-project-show" */ "../views/incubator/projects/show/index.vue"
			),
	},
	{
		path: "incubator/preview-profile",
		name: "incubator-preview-profile",
		meta: { layout: LayoutDefault, auth: true, title: "Preview Profile" },
		component: () =>
			import(
				/* webpackChunkName: "incubator-preview-profile" */ "../views/incubator/preview-profile/index.vue"
			),
	},
	{
		path: "incubator/my-profile",
		name: "incubator-my-profile",
		meta: { layout: LayoutDefault, auth: true, title: "My Profile" },
		component: () =>
			import(
				/* webpackChunkName: "incubator-my-profile" */ "../views/common/my-profile/index.vue"
			),
	},
	{
		path: "incubator/:id(\\d+)/show-profile",
		name: "incubator-show-profile",
		meta: { layout: LayoutDefault, title: "Show Profile" },
		component: () =>
			import(
				/* webpackChunkName: "incubator-show-profile" */ "../views/incubator/show-profile/index.vue"
			),
	},
	{
		path: "incubator/contact-us-for-project",
		meta: { layout: LayoutDefault, title: "Contact Us for Project" },
		name: "incubator-contact-us-for-project",
		component: () =>
			import(
				/* webpackChunkName: "incubator-contact-us-for-project" */ "../views/incubator/contact-us-for-project"
			),
	},
	{
		path: "incubator/incubator-business",
		meta: { layout: LayoutDefault, auth: true, title: "Incubator Business" },
		name: "incubator-incubator-business",
		component: () =>
			import(
				/* webpackChunkName: "incubator-incubator-business" */ "../views/incubator/incubator-business/deparments"
			),
	},
	{
		path: "incubator/incubator-business/:id",
		meta: { layout: LayoutDefault, auth: true, title: "Incubator Business" },
		name: "incubator-incubator-business-show",
		component: () =>
			import(
				/* webpackChunkName: "incubator-incubator-business-show" */ "../views/incubator/incubator-business/show"
			),
	},
	{
		path: "incubator/menu-subscribe",
		meta: { auth: true, layout: LayoutDefault, title: "Menu Subscribe" },
		name: "incubator-menu-subscribe",
		component: () =>
			import(
				/* webpackChunkName: "incubator-menu-subscribe" */ "../views/incubator/menu-subscribe/index.vue"
			),
	},
	{
		path: "incubator/subscribe",
		meta: { layout: LayoutDefault, title: "Subscribe" , type:'incubator'},
		name: "incubator-subscribe",
		component: () =>
			import(
				/* webpackChunkName: "incubator-subscribe" */ "../views/incubator/subscribe/index.vue"
			),
	},
	{
		path: "incubator/program-incubator/:id",
		meta: { layout: LayoutDefault, title: "Program Incubator" },
		name: "incubator-program-incubator",
		component: () =>
			import(
				/* webpackChunkName: "incubator-program-incubator" */ "../views/incubator/program-incubator/index.vue"
			),
	},
];

export default routers;
