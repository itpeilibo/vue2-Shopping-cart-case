import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/AutoComplete',
    component: () => import('@/autocomplete/index.vue')
  },
  {
    path: '/Auto',
    component: () => import('@/autocomplete/index.vue')
  }
]
const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})
export default router
