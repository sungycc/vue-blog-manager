import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [
  {
    path: '/register',
    component: () => import('@/views/register/index.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/layout',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard/index')
      }
    ]
  },
]

export default new Router({
  routes
})
