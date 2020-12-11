import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'guide',
    component:resolve=>(require(["@/views/guide"],resolve)),
  },
  {
    path: '/share',
    name: 'share',
    component:resolve=>(require(["@/views/Share"],resolve)),
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
