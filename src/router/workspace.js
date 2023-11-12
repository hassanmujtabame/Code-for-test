import LayoutDefault from '@/layouts/network/index.vue'

const routers = [
  {
    path: 'workspaces/home',
    meta: { layout: LayoutDefault, title: 'Workspaces Home' },
    name: 'workspaces-home',
    component: () => import(/* webpackChunkName: "workspaces-home" */ '../views/workspaces/home/index.vue')
  },
  {
    path: 'workspaces/reservations',
    meta: { layout: LayoutDefault, title: 'Workspaces Reservations' },
    name: 'workspaces-reservations',
    component: () => import(/* webpackChunkName: "workspaces-home" */ '../views/workspaces/reservations/index.vue')
  },
  {
    path: 'workspaces/requests',
    meta: { layout: LayoutDefault, title: 'Workspaces Requests' },
    name: 'workspaces-requests',
    component: () => import(/* webpackChunkName: "workspaces-home" */ '../views/workspaces/requests/index.vue')
  },
  {
    path: 'workspaces/:id',
    meta: { layout: LayoutDefault, title: 'Workspaces Details' },
    name: 'workspaces-details',
    component: () => import(/* webpackChunkName: "workspaces-home" */ '../views/workspaces/details/index.vue')
  },
  {
    path: 'workspaces/:id(\\d+)/pay-first',
    meta: { layout: LayoutDefault, title: 'Workspaces Details' },
    name: 'workspaces-pay',
    component: () => import(/* webpackChunkName: "workspaces-home" */ '../components/pages/workspaces/reservations/check-out/body-check-out.vue')
  }
]

export default routers;
