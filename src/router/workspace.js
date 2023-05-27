import LayoutDefault from '@/layouts/network/index.vue'
const routers = [
    {
    path: 'workspaces/home',
    meta: {
        layout: LayoutDefault
    },
    name: 'workspaces-home',
    component: () => import( /* webpackChunkName: "workspaces-home" */ '../views/workspaces/home/index.vue')
},
{
    path: 'workspaces/reservations',
    meta: {
        layout: LayoutDefault
    },
    name: 'workspaces-reservations',
    component: () => import( /* webpackChunkName: "workspaces-home" */ '../views/workspaces/reservations/index.vue')
},


]
export default routers;