import * as api from '@/api/home'
const state = {
  enty: {}
}
const getters = {
  enty(state) {
    return state.enty
  }
}
const mutations = {
  setEnty(state, params) {
    state.enty = params
  }
}
const actions = {
  async getAppid({
    commit
  }, res) {
    const {
      data
    } = await api.getAppid(res);
    commit('setEnty', data)
    return data
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
