import * as api from '@/api/record'

const state = {
  record: false,//发送记录
}
const mutations = {
  sendRecord(state, params) {
    state.record = params;
  },
}
const actions = {
  async sendRecord({commit}, params) {//发送记录
    const res = await api.sendRecord(params);
    if (res.Code == 200) {
      commit('sendRecord', true);
    }
    return res;
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
