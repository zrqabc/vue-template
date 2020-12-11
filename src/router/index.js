import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'guide',
    component:resolve=>(require(["@/views/guide"],resolve)),
    meta:{
      title:'2020建企成绩单'
    }
  },
  {
    path: '/share',
    name: 'share',
    component:resolve=>(require(["@/views/Share"],resolve)),
    meta:{
      title:'分享'
    }
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
