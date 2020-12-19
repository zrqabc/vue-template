import Vue from 'vue'
import Vuex from 'vuex'
import report from './modules/report'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    report,
  }
})

export default store
