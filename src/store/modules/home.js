import * as api from '@/api/home'

const state = {
  enty: {}
}
const mutations = {
  getEnty(state, params) {
    state.enty = params
  }
}
const actions = {
  async getEnty({commit}, params) {
    const res = await api.getEnty(params);
    if (res.Code == 200 && res.Result) {
      commit('getEnty', res.Result);
    }
    return res;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
