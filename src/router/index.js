import Vue from 'vue'
import Router from 'vue-router'

import login from '../components/login.vue'
import dashboard from '../components/dashboard.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    }
  ]
})

export default router
