import Vue from 'vue'
import Vuex from 'vuex'
import report from './modules/report'
import other from './modules/other'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    report,
    other
  }
})

export default store
