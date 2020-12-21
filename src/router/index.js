import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',//首页
    name: 'home',
    component: () => import('@/pages/home/index')
  },{
    path: '/search',//搜索页
    name: 'search',
    component: () => import('@/pages/search/index')
  },{
    path: '/list',//成绩单
    name: 'list',
    component: () => import('@/pages/list/index')
  },{
    path: '/rank',//榜单
    name: 'rank',
    component: () => import('@/pages/rank/index')
  },





  {
    path: '/share',
    name: 'share',
    component: () => import('@/pages/Share/index')
  },


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
