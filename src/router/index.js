import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)
// import _import from './_import_' + process.env.NODE_ENV

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'HelloWorld',
      component: _import('HelloWorld'),
      children: [
        {
          path: '',
          name: 'home',
          component: _import('hi/home')
        }, {
          path: 'hi1',
          name: 'hi1',
          component: _import('hi/hi1')
        }, {
          path: 'hi2',
          name: 'hi2',
          component: _import('hi/hi2')
        }
      ]
    }
  ]
})
