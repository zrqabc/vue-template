import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/index.scss'
import '@/utils/rem.js'

import '@/components/globalComponents.js'
import '@/assets/mixins/globalMixins.js'

import cookie from '@/utils/cookie.js'
Vue.prototype.$cookie = cookie;

import '@/plugs/vant.js'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

import lodash from 'lodash';
Vue.prototype.$lodash = lodash;




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
