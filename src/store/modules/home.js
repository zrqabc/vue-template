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
  async getEnty({
    commit
  }, data) {
    const {
      Result
    } = await api.getEnty(data);
    commit('setEnty', Result)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
