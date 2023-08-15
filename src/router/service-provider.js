import LayoutDefault from '@/layouts/service-provider'

const routers = [
	{
		path: "service-provider/home",
		meta: { layout: LayoutDefault, title: "service provider home" },
		name: "service-provider-home",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-home" */ "../views/service-provider/home/index.vue"
			),
	},
	{
		path: "service-provider/contact-us",
		meta: { layout: LayoutDefault, title: "Contact Us" },
		name: "service-provider-contact-us",
		component: () =>
			import(
				/* webpackChunkName: "ContactUs" */ "../views/main/contact-us/index.vue"
			),
	},
	{
		path: "service-provider/providers",
		meta: { layout: LayoutDefault, title: "Providers" },
		name: "service-provider-providers",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-providers" */ "../views/service-provider/providers/index.vue"
			),
	},
	{
		path: "service-provider/conversations",
		meta: { auth: true, layout: LayoutDefault, title: "Conversations" },
		name: "service-provider-conversations",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-conversations" */ "../views/common/messages/conversations/index.vue"
			),
	},
	{
		path: "service-provider/graduate-riadiat",
		meta: { layout: LayoutDefault, title: "Graduate Riadiat" },
		name: "service-provider-graduate-riadiat",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-graduate-riadiat" */ "../views/service-provider/graduate-riadiat/index.vue"
			),
	},
	{
		path: "service-provider/my-profile",
		name: "service-provider-my-profile",
		meta: { layout: LayoutDefault, auth: true, title: "My Profile" },
		component: () =>
			import(
				/* webpackChunkName: "service-provider-my-profile" */ "../views/common/my-profile/index.vue"
			),
	},
	{
		path: "service-provider/preview-profile",
		name: "service-provider-preview-profile",
		meta: { layout: LayoutDefault, auth: true, title: "Preview Profile" },
		component: () =>
			import(
				/* webpackChunkName: "service-provider-preview-profile" */ "../views/service-provider/preview-profile/index.vue"
			),
	},
	{
		path: "service-provider/subscribe",
		meta: {
			layout: LayoutDefault,
			auth: true,
			title: "Subscribe",
			type: "service-provider",
		},
		name: "service-provider-subscribe",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-subscribe" */ "../views/service-provider/subscribe/index.vue"
			),
	},
	{
		path: "service-provider/:id(\\d+)/show-profile",
		meta: { layout: LayoutDefault, auth: true, title: "Show Profile" },
		name: "service-provider-show-profile",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-show-profile" */ "../views/service-provider/show-profile/index.vue"
			),
	},
	{
		path: "service-provider/my-purchases",
		meta: { layout: LayoutDefault, auth: true, title: "My Purchases" },
		name: "service-provider-client-my-purchases",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-my-purchases" */ "../views/service-provider/client/my-purchases/index.vue"
			),
	},
	{
		path: "service-provider/my-proposals",
		meta: { layout: LayoutDefault, auth: true, title: "My Proposals" },
		name: "service-provider-my-proposals",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-my-proposals" */ "../views/service-provider/client/my-proposals/index.vue"
			),
	},
	{
		path: "service-provider/my-proposals/:id(\\d+)/offers",
		meta: { layout: LayoutDefault, auth: true, title: "My Proposal Offers" },
		name: "service-provider-my-proposal-offers",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-my-request-page" */ "../views/service-provider/client/my-proposal-offers/index.vue"
			),
	},
	{
		path: "service-provider/my-schedules",
		meta: { layout: LayoutDefault, auth: true, title: "My Schedules" },
		name: "service-provider-my-schedules",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-my-schedules" */ "../views/service-provider/my-schedules/index.vue"
			),
	},
	{
		path: "service-provider/my-schedules/:id(\\d+)",
		meta: { layout: LayoutDefault, auth: true, title: "My Schedule Show" },
		name: "service-provider-my-schedule-show",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-my-schedule-show" */ "../views/service-provider/my-schedules/page/index.vue"
			),
	},
	{
		path: "service-provider/control-jobs",
		meta: { layout: LayoutDefault, title: "Control Jobs" },
		name: "service-provider-control-jobs",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-control-jobs" */ "../views/service-provider/control-jobs/index.vue"
			),
	},
	{
		path: "service-provider/jobs",
		meta: { layout: LayoutDefault, title: "Jobs" },
		name: "service-provider-jobs",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-jobs" */ "../views/service-provider/jobs/index.vue"
			),
	},
	{
		path: "service-provider/jobs/:id(\\d+)",
		meta: { layout: LayoutDefault, auth: true, title: "Job Show" },
		name: "service-provider-job-show",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-job-show" */ "../views/service-provider/jobs/page/index.vue"
			),
	},
	{
		path: "service-provider/dashboard",
		meta: { layout: LayoutDefault, auth: true, title: "Dashboard" },
		name: "service-provider-dashboard",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-dashboard" */ "../views/service-provider/dashboard/index.vue"
			),
	},
	{
		path: "service-provider/my-offers",
		meta: { layout: LayoutDefault, auth: true, title: "My Offers" },
		name: "service-provider-my-offers",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-my-offers" */ "../views/service-provider/page-my-offers/index.vue"
			),
	},
	{
		path: "service-provider/my-ready-services",
		meta: { layout: LayoutDefault, title: "My Ready Services" },
		name: "service-provider-my-ready-services",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-my-ready-services" */ "../views/service-provider/ready-services/mine/index.vue"
			),
	},
	{
		path: "service-provider/ready-services",
		meta: { layout: LayoutDefault, auth: true, title: "Ready Services" },
		name: "service-provider-ready-services",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-ready-services" */ "../views/service-provider/ready-services/index.vue"
			),
	},

	{
		path: "service-provider/ready-services/:id(\\d+)",
		meta: {
			layout: LayoutDefault,
			auth: true,
			title: "Ready Service",
			type: "service-provider",
		},
		name: "service-provider-ready-service",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-page-service-ready" */ "../views/service-provider/page-service-ready/index.vue"
			),
	},
	{
		path: "service-provider/proposals",
		meta: { layout: LayoutDefault, role: "provider", title: "Proposals" },
		name: "service-provider-proposals",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-proposals" */ "../views/service-provider/proposals/index.vue"
			),
	},
	{
		path: "service-provider/proposals/:id(\\d+)",
		meta: { layout: LayoutDefault, auth: true, title: "Proposal Page" },
		name: "service-provider-proposal-page",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-show-service-page" */ "../views/service-provider/proposals/page/index.vue"
			),
	},
	{
		path: "service-provider/proposals/:id(\\d+)/progress",
		meta: { layout: LayoutDefault, auth: true, title: "Proposal In Progress" },
		name: "service-provider-proposal-in-process",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-show-service-page-progress" */ "../views/service-provider/proposals/request-page-in-progress/index.vue"
			),
	},
	{
		path: "service-provider/ready-services/purchase-requests",
		meta: {
			layout: LayoutDefault,
			auth: true,
			title: "Request Purchase Services",
		},
		name: "service-provider-request-purchase-services",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-request-purchase" */ "../views/service-provider/ready-services/request-purchase-services/index.vue"
			),
	},
	{
		path: "service-provider/ready-services/:id(\\d+)/purchase-requests",
		meta: {
			layout: LayoutDefault,
			auth: true,
			title: "Purchase Requests for Service",
		},
		name: "service-provider-purchase-requests-one-service",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-purchase-requests-one-service" */ "../views/service-provider/ready-services/request-purchase-services/index.vue"
			),
	},
	{
		path: "service-provider/ready-services/purchase-requests/:id(\\d+)/progress",
		meta: {
			layout: LayoutDefault,
			auth: true,
			title: "Purchase Request Progress",
		},
		name: "service-provider-request-purchase-service-progress",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-request-purchase-progress" */ "../views/service-provider/ready-services/request-purchase-services/progress/index.vue"
			),
	},
	{
		path: "service-provider/ready-services/purchase-requests/:id(\\d+)",
		meta: { layout: LayoutDefault, auth: true, title: "Purchase Request Show" },
		name: "service-provider-request-purchase-service-show",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-request-purchase-show" */ "../views/service-provider/ready-services/request-purchase-services/show-request.vue"
			),
	},
	/*{
      path: 'service-provider/proposals/:id(\\d+)',
      meta:{layout:LayoutDefault},
      name: 'service-provider-page-service',
      component: () => import( '../views/service-provider/page-service/index.vue')
  },*/
	{
		path: "service-provider/menu-subscribe",
		meta: { layout: LayoutDefault, auth: true, title: "Menu Subscribe" },
		name: "service-provider-menu-subscribe",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-menu-subscribe" */ "../views/service-provider/menu-subscribe/index.vue"
			),
	},
	{
		path: "service-provider/services-online",
		meta: { layout: LayoutDefault, title: "Services Online" },
		name: "service-provider-services-online",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-services-online" */ "../views/service-provider/services-online/index.vue"
			),
	},
	{
		path: "service-provider/services-offline",
		meta: { layout: LayoutDefault, title: "Services Offline" },
		name: "service-provider-services-offline",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-services-offline" */ "../views/service-provider/services-offline/index.vue"
			),
	},
	{
		path: "service-provider/my-financial-transactions",
		meta: {
			layout: LayoutDefault,
			auth: true,
			title: "My Financial Transactions",
		},
		name: "service-provider-my-financial-transactions",
		component: () =>
			import(
				/* webpackChunkName: "service-provider-my-financial-transactions" */ "../views/service-provider/my-financial-transactions/index.vue"
			),
	},
	{
		path: "service-provider/balance-charge",
		name: "service-provider-balance-charge",
		meta: { layout: LayoutDefault, auth: true, title: "Balance Charge" },
		component: () =>
			import(
				/* webpackChunkName: "service-provider-balance-charge" */ "../views/service-provider/balance-charge/index.vue"
			),
	},
	{
		path: "service-provider/rate-my-services",
		name: "service-provider-rate-my-service",
		meta: { layout: LayoutDefault, auth: true, title: "Rate My Services" },
		component: () =>
			import(
				/* webpackChunkName: "service-provider-rate-my-service" */ "../views/service-provider/page-rate-my-services/index.vue"
			),
	},
];

export default routers;
