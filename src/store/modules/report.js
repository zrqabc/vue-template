import * as api from '@/api/report'

const state = {
  provinceList: [],//省份列表
}
const mutations = {
  getProvinceList(state, params) {
    state.provinceList = params;
  }
}
const actions = {
  async getProvinceList({commit}, params) {//获取省份列表
    const res = await api.getProvinceList(params);
    if (res.Code == 200 && res.Result) {
      commit('getProvinceList', res.Result);
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
