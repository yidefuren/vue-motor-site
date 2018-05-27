import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import User from '@/pages/user/User'
import Reg from '@/pages/user/Reg'
import Login from '@/pages/user/Login'
import Find from '@/pages/user/Find'
import Motor from '@/pages/detail/Motor'
import Seach from '@/pages/seach/Seach'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/motor/:id',
      name: 'Motor',
      component: Motor
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/seach',
      name: 'Seach',
      component: Seach
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
