import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home,
    app
  }
})

export default store
