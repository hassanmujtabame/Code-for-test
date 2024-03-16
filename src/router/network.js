import LayoutDefault from "@/layouts/network/index.vue";

const routers = [
  {
    path: "network/dashboard",
    meta: { layout: LayoutDefault, auth: true, title: "Dashboard" },
    name: "network-dashboard",
    component: () =>
      import(
        /* webpackChunkName: "network-dashboard" */ "../views/network/dashboard/index.vue"
      ),
  },
  {
    path: "network/contact-us",
    meta: { layout: LayoutDefault, title: "Contact Us" },
    name: "network-contact-us",
    component: () =>
      import(
        /* webpackChunkName: "ContactUs" */ "../views/main/contact-us/index.vue"
      ),
  },
  {
    path: "network/my-profile",
    name: "network-my-profile",
    meta: { layout: LayoutDefault, auth: true, title: "My Profile" },
    component: () =>
      import(
        /* webpackChunkName: "network-my-profile" */ "../views/common/my-profile/index.vue"
      ),
  },
  {
    path: "network/preview-profile",
    name: "network-preview-profile",
    meta: { layout: LayoutDefault, auth: true, title: "Preview Profile" },
    component: () =>
      import(
        /* webpackChunkName: "network-preview-profile" */ "../views/network/preview-profile/index.vue"
      ),
  },
  {
    path: "network/:id(\\d+)/show-profile",
    name: "network-show-profile",
    meta: { layout: LayoutDefault, title: "Show Profile" },
    component: () =>
      import(
        /* webpackChunkName: "network-show-profile" */ "../views/network/show-profile/index.vue"
      ),
  },
  {
    path: "network/offers/dashboard",
    meta: { auth: true, layout: LayoutDefault, title: "Offers Dashboard" },
    name: "network-offers-dashboard",
    component: () =>
      import(
        /* webpackChunkName: "network-offers-dashboard" */ "../views/network/offers-dashboard/index.vue"
      ),
  },
  {
    path: "network/conversations",
    meta: { auth: true, layout: LayoutDefault, title: "Conversations" },
    name: "network-conversations",
    component: () =>
      import(
        /* webpackChunkName: "network-conversations" */ "../views/common/messages/conversations/index.vue"
      ),
  },
  {
    path: "network/menu-subscribe",
    meta: { auth: true, layout: LayoutDefault, title: "Menu Subscribe" },
    name: "network-menu-subscribe",
    component: () =>
      import(
        /* webpackChunkName: "network-menu-subscribe" */ "../views/network/menu-subscribe/index.vue"
      ),
  },
  {
    path: "network/success-stories",
    meta: { layout: LayoutDefault, title: "Success Stories" },
    name: "network-success-stories",
    component: () =>
      import(
        /* webpackChunkName: "network-success-stories" */ "../views/network/success-stories/index.vue"
      ),
  },
  {
    path: "network/success-stories/:id(\\d+)",
    meta: { layout: LayoutDefault, title: "Success Story" },
    name: "network-success-story-show",
    component: () =>
      import(
        /* webpackChunkName: "network-success-story-show" */ "../views/network/success-story/index.vue"
      ),
  },
  {
    path: "network/my-story",
    meta: { layout: LayoutDefault, auth: true, title: "My Story" },
    name: "network-my-story",
    component: () =>
      import(
        /* webpackChunkName: "network-my-story" */ "../views/network/success-story/my-story.vue"
      ),
  },
  {
    path: "network/investment-projects",
    meta: { layout: LayoutDefault, auth: true, title: "Investment Projects" },
    name: "network-investment-project",
    component: () =>
      import(
        /* webpackChunkName: "network-investment-project" */ "../views/network/investment-project/index.vue"
      ),
  },
  {
    path: "network/investment-projects/requests",
    meta: {
      layout: LayoutDefault,
      auth: true,
      title: "Investment Project Requests",
    },
    name: "network-investment-project-requests",
    component: () =>
      import(
        /* webpackChunkName: "network-investment-project-requests" */ "../views/network/investment-project/requests/index.vue"
      ),
  },
  {
    path: "network/investment-projects/investment-with-others-requests",
    meta: {
      layout: LayoutDefault,
      auth: true,
      title: "Investment Project with Others Requests",
    },
    name: "network-investment-project-investment-with-others-requests",
    component: () =>
      import(
        /* webpackChunkName: "network-investment-project-requests-with-others" */ "../views/network/investment-project/investment-with-others-requests/index.vue"
      ),
  },
  {
    path: "network/investment-projects/request-add",
    meta: {
      layout: LayoutDefault,
      auth: true,
      title: "Add Investment Project Request",
    },
    name: "network-investment-project-request-add",
    component: () =>
      import(
        /* webpackChunkName: "network-investment-project-request-add" */ "../views/network/investment-project/add-project/index.vue"
      ),
  },
  {
    path: "network/investment-projects/prepare-for-project",
    meta: { layout: LayoutDefault, auth: true, title: "Prepare for Project" },
    name: "network-investment-project-service-prepare-project",
    component: () =>
      import(
        /* webpackChunkName: "network-investment-project-prepare-for-project" */ "../views/network/investment-project/prepare-for-project/index.vue"
      ),
  },
  {
    path: "network/investment-projects/:id(\\d+)",
    meta: { layout: LayoutDefault, auth: true, title: "Investment Project" },
    name: "network-investment-project-show",
    component: () =>
      import(
        /* webpackChunkName: "network-investment-project-show" */ "../views/network/investment-project/page/index.vue"
      ),
  },
  {
    path: "network/card-membership",
    meta: { layout: LayoutDefault, auth: true, title: "Card Membership" },
    name: "network-card-membership",
    component: () =>
      import(
        /* webpackChunkName: "network-card-membership" */ "../views/network/card-membership/index.vue"
      ),
  },
  {
    path: "network/show-card",
    meta: { layout: LayoutDefault, auth: true, title: "Show Card Membership" },
    name: "show-card",
    component: () =>
      import(
        /* webpackChunkName: "network-card-membership" */ "../views/network/card-membership/show-card.vue"
      ),
  },
  {
    path: "network/blogs",
    meta: { layout: LayoutDefault, auth: true, title: "Blogs" },
    name: "network-blogs",
    component: () =>
      import(
        /* webpackChunkName: "network-blogs" */ "../views/network/blog/index.vue"
      ),
  },
  {
    path: "network/blogs/mine",
    meta: { layout: LayoutDefault, auth: true, title: "My Blogs" },
    name: "network-blogs-mine",
    component: () =>
      import(
        /* webpackChunkName: "network-blogs-mine" */ "../views/network/blog/mine/index.vue"
      ),
  },
  {
    path: "network/blogs/:id(\\d+)",
    meta: { layout: LayoutDefault, auth: true, title: "Blog" },
    name: "network-blog-show",
    component: () =>
      import(
        /* webpackChunkName: "network-blog-show" */ "../views/network/blog-page/index.vue"
      ),
  },
  {
    path: "network/affiliate-marketing",
    meta: { layout: LayoutDefault, title: "Affiliate Marketing" },
    name: "network-affiliate-marketing",
    component: () =>
      import(
        /* webpackChunkName: "network-podcasts" */ "../views/network/affiliate-marketing/index.vue"
      ),
  },
  {
    path: "network/podcasts",
    meta: { layout: LayoutDefault, auth: true, title: "Podcasts" },
    name: "network-podcasts",
    component: () =>
      import(
        /* webpackChunkName: "network-podcasts" */ "../views/network/podcasts/index.vue"
      ),
  },
  {
    path: "network/podcasts/:id(\\d+)",
    meta: { layout: LayoutDefault, auth: true, title: "Podcast" },
    name: "network-podcast-show",
    component: () =>
      import(
        /* webpackChunkName: "network-podcast-show" */ "../views/network/podcast-page/index.vue"
      ),
  },
  {
    path: "network/exhibitions",
    meta: { layout: LayoutDefault, auth: true, title: "Exhibitions" },
    name: "network-exhibitions",
    component: () =>
      import(
        /* webpackChunkName: "network-exhibitions" */ "../views/network/exhibitions/index.vue"
      ),
  },
  {
    path: "network/exhibitions/:id(\\d+)",
    meta: { layout: LayoutDefault, auth: true, title: "Exhibition" },
    name: "network-exhibition-show",
    component: () =>
      import(
        /* webpackChunkName: "network-exhibition-show" */ "../views/network/exhibition-page/index.vue"
      ),
  },
  {
    path: "network/exhibitions/:id(\\d+)/requests",
    meta: { layout: LayoutDefault, auth: true, title: "Exhibition Requests" },
    name: "network-exhibition-requests",
    component: () =>
      import(
        /* webpackChunkName: "network-exhibitions-requests" */ "../views/network/exhibitions/requests/index.vue"
      ),
  },
  {
    path: "network/exhibitions/:id(\\d+)/demand-participate",
    meta: { layout: LayoutDefault, auth: true, title: "Demand to Participate" },
    name: "network-exhibition-demand-participate",
    component: () =>
      import(
        /* webpackChunkName: "network-exhibition-demand-participate" */ "../views/network/exhibition-page/participate/index.vue"
      ),
  },
  {
    path: "network/offers",
    meta: { layout: LayoutDefault, auth: true, title: "Offers" },
    name: "network-offers",
    component: () =>
      import(
        /* webpackChunkName: "network-offers" */ "../views/network/offers/index.vue"
      ),
  },
  {
    path: "network/offers/details-coupon/:id(\\d+)",
    meta: { layout: LayoutDefault, auth: true, title: "details Coupon" },
    name: "network-details-coupon",
    component: () =>
      import(
        /* webpackChunkName: "network-details-coupon" */ "../views/network/offers/details-coupon/index.vue"
      ),
  },
  {
    path: "network/service-provider-member",
    meta: {
      layout: LayoutDefault,
      auth: true,
      title: "Service Provider Member",
    },
    name: "network-service-provider-member",
    component: () =>
      import(
        /* webpackChunkName: "network-service-provider-member" */ "../views/network/service-provider-member/index.vue"
      ),
  },
  {
    path: "network/members",
    meta: { layout: LayoutDefault, auth: true, title: "Member Network" },
    name: "network-member-network",
    component: () =>
      import(
        /* webpackChunkName: "network-member-network" */ "../views/network/member-network/index.vue"
      ),
  },
  {
    path: "network/members/:id(\\d+)",
    meta: { layout: LayoutDefault, auth: true, title: "Member Show" },
    name: "network-member-show",
    component: () =>
      import(
        /* webpackChunkName: "network-member-show" */ "../views/network/member-show/index.vue"
      ),
  },
  {
    path: "network/models",
    meta: { layout: LayoutDefault, auth: true, title: "Models" },
    name: "network-models",
    component: () =>
      import(
        /* webpackChunkName: "network-models" */ "../views/network/models/index.vue"
      ),
  },
  {
    path: "network/models/mine",
    meta: { layout: LayoutDefault, auth: true, title: "My Models" },
    name: "network-models/mine",
    component: () =>
      import(
        /* webpackChunkName: "network-mine" */ "../views/network/models/mine/index.vue"
      ),
  },
  {
    path: "network/models/:id(\\d+)",
    meta: { layout: LayoutDefault, auth: true, title: "Model Show" },
    name: "network-model-show",
    component: () =>
      import(
        /* webpackChunkName: "network-model-show" */ "../views/network/models/show/index.vue"
      ),
  },
  {
    path: "network/learning-meetings",
    meta: { layout: LayoutDefault, auth: true, title: "Learning Meetings" },
    name: "network-learning-meetings",
    component: () =>
      import(
        /* webpackChunkName: "network-learning-meetings" */ "../views/network/learning-meetings/index.vue"
      ),
  },
  {
    path: "network/learning-meetings/:id(\\d+)",
    meta: { layout: LayoutDefault, auth: true, title: "Learning Meeting" },
    name: "network-learning-meeting-show",
    component: () =>
      import(
        /* webpackChunkName: "network-learning-meeting-show" */ "../views/network/learning-meeting-page/index.vue"
      ),
  },
  {
    path: "network/control-member-partner",
    meta: {
      layout: LayoutDefault,
      auth: true,
      title: "Control Member Partner",
    },
    name: "network-control-member-partner",
    component: () =>
      import(
        /* webpackChunkName: "network-control-member-partner" */ "../views/network/control-member-partner/index.vue"
      ),
  },
  {
    path: "network/home",
    meta: { layout: LayoutDefault, title: "network home" },
    name: "network-home",
    component: () =>
      import(
        /* webpackChunkName: "network-home" */ "../views/network/home/index.vue"
      ),
  },
  {
    path: "network/subscribe",
    meta: {
      layout: LayoutDefault,
      title: "Subscribe",
      type: "network",
    },
    name: "network-subscribe",
    component: () =>
      import(
        /* webpackChunkName: "network-subscribe" */ "../views/network/subscribe/index.vue"
      ),
  },
  {
    path: "network/subscribe/finish",
    meta: { layout: LayoutDefault, title: "Subscribe Finish", type: "network" },
    name: "network-subscribe-finish",
    component: () =>
      import(
        /* webpackChunkName: "network-subscribe-finish" */ "../views/network/SubscribeFinish.vue"
      ),
  },
  {
    path: "network/my-financial-transactions",
    meta: {
      layout: LayoutDefault,
      auth: true,
      title: "My Financial Transactions",
    },
    name: "network-my-financial-transactions",
    component: () =>
      import(
        /* webpackChunkName: "network-my-financial-transactions" */ "../views/network/my-financial-transactions/index.vue"
      ),
  },
  {
    path: "network/balance-charge",
    name: "network-balance-charge",
    meta: { layout: LayoutDefault, auth: true, title: "Balance Charge" },
    component: () =>
      import(
        /* webpackChunkName: "network-balance-charge" */ "../views/network/balance-charge/index.vue"
      ),
  },
  {
    path: "network/register-networking",
    meta: { layout: LayoutDefault, title: "Register Networking" },
    name: "register-networking",
    component: () =>
      import(
        /* webpackChunkName: "register-networking" */ "../views/network/register-networking/index.vue"
      ),
  },
];

export default routers;
