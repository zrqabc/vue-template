import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home/index')
  },{
    path: '/search',
    name: 'search',
    component: () => import('@/pages/search/index')
  },





  {
    path: '/share',
    name: 'share',
    component: () => import('@/pages/Share')
  },
  // {
  //   path: '/home',
  //   name: 'shahomere',
  //   component: () => import('@/pages/Home')
  // },


  /*其他*/
  {
    path: '/404',
    name: 'errorPage',
    component: () => import('@/pages/404')
  },
  {
    path: '*',//默认路由
    redirect: '/404'
  },

]

const router = new VueRouter({
  base: process.env.NODE_ENV=='development' ? '/' : '/',
  mode:'history',
  routes
})




export default router
