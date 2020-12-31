import Vue from 'vue'
import Vuex from 'vuex'

import report from './modules/report'
import other from './modules/other'
import record from './modules/record'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    report,
    other,
    record
  }
})

export default store
