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


//全局路由守卫
//白名单-登录注册等不需要登录也可以访问的页面
// const whiteList = ['/login'];
// router.beforeEach((to, from, next) => {
//   if(isLogin) {
//     //登录时
//     if(to.path == '/login') {
//       //登录且跳转登录时，重定向到主页
//       next({path: '/'});
//     } else {
//       next();
//     }
//   } else {
//     //没有登录时
//     if (whiteList.indexOf(to.path) != -1) {
//       //白名单
//       next();
//     } else {
//       //不在白名单
//       next('/login');
//     }
//   }
// })




export default router
