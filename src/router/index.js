import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Sigin from '@/components/Sigin'
import Home from '@/components/Home'
Vue.use(Router)
export default new Router({
    mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/sigin',
      name: 'Sigin',
      component: Sigin
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})