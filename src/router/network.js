//import LayoutDefault from '@/layouts/default/index.vue'
import LayoutNetwork from '@/layouts/network/index.vue'
const routers =[
    {
        path: 'network/dashboard',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-dashboard',
        component: () => import(/* webpackChunkName: "network-dashboard" */ '../views/network/dashboard/index.vue') 
    },
    {
        path: 'network/my-profile',
        name: 'network-my-profile',
        meta:{layout:LayoutNetwork,auth:true},
        component: () => import(/* webpackChunkName: "network-my-profile" */ '../views/common/my-profile/index.vue')
    },
    {
        path: 'network/preview-profile',
        name: 'network-preview-profile',
        meta:{layout:LayoutNetwork,auth:true},
        component: () => import(/* webpackChunkName: "network-preview-profile" */ '../views/network/preview-profile/index.vue')
    },
    {
        path: 'network/:id/show-profile',
        name: 'network-show-profile',
        meta:{layout:LayoutNetwork},
        component: () => import(/* webpackChunkName: "network-show-profile" */ '../views/network/show-profile/index.vue')
    },
    {
        path: 'network/offers/dashboard',
        meta:{auth:true,layout:LayoutNetwork},
        name: 'network-offers-dashboard',
        component: () => import(/* webpackChunkName: "network-offers-dashboard" */ '../views/network/offers-dashboard/index.vue') 
    },
    {
        path: 'network/conversations',
        meta:{auth:true,layout:LayoutNetwork},
        name: 'network-conversations',
        component: () => import(/* webpackChunkName: "network-conversations" */ '../views/common/messages/conversations/index.vue') 
    },
    {
        path: 'network/menu-subscribe',
        meta:{auth:true,layout:LayoutNetwork},
        name: 'network-menu-subscribe',
        component: () => import(/* webpackChunkName: "network-menu-subscribe" */ '../views/network/menu-subscribe/index.vue') 
    },
    {
        path: 'network/success-stories',
        meta:{layout:LayoutNetwork},
        name: 'network-success-stories',
        component: () => import(/* webpackChunkName: "network-success-stories" */ '../views/network/success-stories/index.vue') 
    },
    {
        path: 'network/success-stories/:id',
        meta:{layout:LayoutNetwork},
        name: 'network-success-story-show',
        component: () => import(/* webpackChunkName: "network-success-story-show" */ '../views/network/success-story/index.vue') 
    },
    {
        path: 'network/my-story',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-my-story',
        component: () => import(/* webpackChunkName: "network-my-story" */ '../views/network/success-story/my-story.vue') 
    },
    {
        path: 'network/investment-projects',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-investment-project',
        component: () => import(/* webpackChunkName: "network-investment-project" */ '../views/network/investment-project/index.vue') 
    },
    {
        path: 'network/investment-projects/requests',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-investment-project-requests',
        component: () => import(/* webpackChunkName: "network-investment-project-requests" */ '../views/network/investment-project/requests/index.vue') 
    },
    {
        path: 'network/investment-projects/request-add',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-investment-project-request-add',
        component: () => import(/* webpackChunkName: "network-investment-project-request-add" */ '../views/network/investment-project-request/index.vue') 
    },
    {
        path: 'network/investment-projects/:id',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-investment-project-show',
        component: () => import(/* webpackChunkName: "network-investment-project-show" */ '../views/network/investment-project-page/index.vue') 
    },
    {
        path: 'network/card-membership',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-card-membership',
        component: () => import(/* webpackChunkName: "network-card-membership" */ '../views/network/card-membership/index.vue') 
    },
    {
        path: 'network/blogs',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-blogs',
        component: () => import(/* webpackChunkName: "network-blogs" */ '../views/network/blog/index.vue') 
    },
    {
        path: 'network/blogs/mine',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-blogs-mine',
        component: () => import(/* webpackChunkName: "network-blogs-mine" */ '../views/network/blog/mine/index.vue') 
    },
    {
        path: 'network/blogs/:id',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-blog-show',
        component: () => import(/* webpackChunkName: "network-blog-show" */ '../views/network/blog-page/index.vue') 
    },
    {
        path: 'network/affiliate-marketing',
        meta:{layout:LayoutNetwork},
        name: 'network-affiliate-marketing',
        component: () => import(/* webpackChunkName: "network-podcasts" */ '../views/network/affiliate-marketing/index.vue') 
    },
    {
        path: 'network/podcasts',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-podcasts',
        component: () => import(/* webpackChunkName: "network-podcasts" */ '../views/network/podcasts/index.vue') 
    },
    {
        path: 'network/podcasts/:id',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-podcast-show',
        component: () => import(/* webpackChunkName: "network-podcast-show" */ '../views/network/podcast-page/index.vue') 
    },
    {
        path: 'network/exhibitions',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-exhibitions',
        component: () => import(/* webpackChunkName: "network-exhibitions" */ '../views/network/exhibitions/index.vue') 
    },
    {
        path: 'network/exhibitions/:id',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-exhibition-show',
        component: () => import(/* webpackChunkName: "network-exhibition-show" */ '../views/network/exhibition-page/index.vue') 
    },
    {
        path: 'network/exhibitions/:id/requests',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-exhibition-requests',
        component: () => import(/* webpackChunkName: "network-exhibitions-requests" */ '../views/network/exhibitions/requests/index.vue') 
    },
    {
        path: 'network/exhibitions/:id/share',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-exhibition-share',
        component: () => import(/* webpackChunkName: "network-exhibition-share" */ '../views/network/exhibition-page/share/index.vue') 
    },
    {
        path: 'network/offers',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-offers',
        component: () => import(/* webpackChunkName: "network-offers" */ '../views/network/offers/index.vue') 
    },
    {
        path: 'network/service-provider-member',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-service-provider-member',
        component: () => import(/* webpackChunkName: "network-service-provider-member" */ '../views/network/service-provider-member/index.vue') 
    },
    {
        path: 'network/members',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-member-network',
        component: () => import(/* webpackChunkName: "network-member-network" */ '../views/network/member-network/index.vue') 
    },
    {
        path: 'network/members/:id',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-member-show',
        component: () => import(/* webpackChunkName: "network-member-show" */ '../views/network/member-show/index.vue') 
    },
    {
        path: 'network/models',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-models',
        component: () => import(/* webpackChunkName: "network-models" */ '../views/network/models/index.vue') 
    },
    {
        path: 'network/models/mine',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-models/mine',
        component: () => import(/* webpackChunkName: "network-mine" */ '../views/network/models/mine/index.vue') 
    },
    {
        path: 'network/models/:id',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-model-show',
        component: () => import(/* webpackChunkName: "network-model-show" */ '../views/network/models/show/index.vue') 
    },
    {
        path: 'network/learning-meetings',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-learning-meetings',
        component: () => import(/* webpackChunkName: "network-learning-meetings" */ '../views/network/learning-meetings/index.vue') 
    },
    {
        path: 'network/learning-meetings/:id',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-learning-meeting-show',
        component: () => import(/* webpackChunkName: "network-learning-meeting-show" */ '../views/network/learning-meeting-page/index.vue') 
    },
    {
        path: 'network/control-mamber-partner',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-control-mamber-partner',
        component: () => import(/* webpackChunkName: "network-control-mamber-partner" */ '../views/network/control-mamber-partner/index.vue') 
    },
    {
        path: 'network/home',
        meta:{layout:LayoutNetwork},
        name: 'network-home',
        component: () => import(/* webpackChunkName: "network-home" */ '../views/network/home/index.vue') 
    },
    {
        path: 'network/subscribe',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-subscribe',
        component: () => import(/* webpackChunkName: "network-subscribe" */ '../views/network/subscribe/index.vue') 
    },
    {
        path: 'network/subscribe/finish',
        meta:{layout:LayoutNetwork},
        name: 'netwoc="../rk-subscribe-finish',
        component: () => import(/* webpackChunkName: "network-subscribe-finish" */ '../views/network/SubscribeFinish.vue') 
    },
    {
        path: 'network/my-financial-transactions',
        meta:{layout:LayoutNetwork,auth:true},
        name: 'network-my-financial-transactions',
        component: () => import(/* webpackChunkName: "network-my-financial-transactions" */ '../views/network/my-financial-transactions/index.vue')
    },
    {
        path: 'network/balance-charge',
        name: 'network-balance-charge',
        meta:{layout:LayoutNetwork,auth:true},
        component: () => import(/* webpackChunkName: "network-balance-charge" */ '../views/network/balance-charge/index.vue')
      },
    {
        path: 'network/register-networking',
        meta:{layout:LayoutNetwork},
        name: 'register-networking',
        component: () => import(/* webpackChunkName: "register-networking" */ '../views/network/register-networking/index.vue')
    }
]
export default routers;