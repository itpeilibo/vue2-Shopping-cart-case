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
    component: () => import('../../01-拖拽/App.vue')
  },
  {
    path: '/Demo',
    component: () => import('../../01-拖拽/App.vue')
  },

]
const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})
export default router
