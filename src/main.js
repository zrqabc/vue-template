import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible.js'
import store from './store'
import '@/plugs/vant.js'
import '@/assets/css/index.less'
let echarts = require('echarts');
Vue.prototype.$echarts = echarts
import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js/dist/vue-fullpage.js'


Vue.use(VueFullPage)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
