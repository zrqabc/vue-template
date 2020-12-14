import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/index.scss'
import '@/untils/rem.js'

import '@/components/GlobalComponents.js'
import '@/assets/mixins/GlobalMixins.js'

import '@/plugs/vant.js'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js/dist/vue-fullpage.js'
Vue.use(VueFullPage)






Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
