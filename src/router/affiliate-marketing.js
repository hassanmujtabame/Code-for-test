import LayoutDefault from '@/layouts/affiliate-marketing/index.vue'

const routers = [
	{
		path: "affiliate-marketing/home",
		meta: { layout: LayoutDefault, title: "Home" },
		name: "affiliate-marketing-home",
		component: () =>
			import(
				/* webpackChunkName: "affiliate-marketing-home" */ "../views/affiliate-marketing/home/index.vue"
			),
	},
	{
		path: "affiliate-marketing/dashboard",
		meta: { layout: LayoutDefault, title: "Dashboard" },
		name: "affiliate-marketing-dashboard",
		component: () =>
			import(
				/* webpackChunkName: "affiliate-marketing-home" */ "../views/affiliate-marketing/dashboard/index.vue"
			),
	},
	{
		path: "affiliate-marketing/generate-url",
		meta: { layout: LayoutDefault, title: "generate-url" },
		name: "affiliate-marketing-generate-url",
		component: () =>
			import(
				/* webpackChunkName: "affiliate-marketing-home" */ "../views/affiliate-marketing/generate-url/index.vue"
			),
	},
	
];

export default routers;
