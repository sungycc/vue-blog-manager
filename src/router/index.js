import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)
// import _import from './_import_' + process.env.NODE_ENV

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/layout'
    }, {
      path: '/login',
      component: _import('login')
    }, {
      path: '/layout',
      component: _import('layout')
    }
  ]
})
