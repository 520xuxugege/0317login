import Vue from 'vue'
import Router from 'vue-router'
import create from '@/components/create'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/create',
      name: 'create',
      component: create
    },
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
