import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'

const Pokes = () => import('@/pages/Pokes.vue')
const Poke = () => import('@/pages/Poke.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pokes',
      name: 'pokes',
      component: Pokes
    },
    {
      path: '/poke',
      name: 'poke_desc',
      component: Poke,
      props: true
    }
  ]
})
