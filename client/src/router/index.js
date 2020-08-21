import Vue from 'vue'
import VueRouter from 'vue-router'
import ItemList from '../views/ItemList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ItemList',
    component: ItemList
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: () => import(/* webpackChunkName: "thanks" */ '../views/Thanks.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
