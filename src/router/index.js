import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomeComponent'
import About from '@/components/AboutComponent'
import Coins from '@/components/CoinsComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/coins/:id',
      name: 'Coins',
      component: Coins
    }
  ]
})
