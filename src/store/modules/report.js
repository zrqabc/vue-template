import * as api from '@/api/report'

const state = {
  provinceList: [],//省份列表
  companyName: [],//名字类似的企业
  report: {//成绩单
    company: {},
    projectRanges: [],
    techniques: [],
    reds: [],
    peoples: [],
    history: {}
  },
  reportTop: [],//榜单
}
const mutations = {
  getProvinceList(state, params) {
    state.provinceList = params;
  },
  searchCompanyName(state, params) {
    state.companyName = params;
  },
  changeCompanyNameList(state, params) {
    state.companyName = params;
  },
  getReport(state, params) {
    state.report = params;
  },
  getReportTop(state, params) {
    state.reportTop = params;
  },
}
const actions = {
  async getProvinceList({commit}, params) {//获取省份列表
    const res = await api.getProvinceList(params);
    if (res.Code == 200 && res.Result) {
      commit('getProvinceList', res.Result);
    }
    return res;
  },
  async searchCompanyName({commit}, params) {//获取名字类似的企业
    const res = await api.searchCompanyName(params);
    if (res.Code == 200 && res.Result) {
      commit('searchCompanyName', res.Result);
    }
    return res;
  },
  async changeCompanyNameList({commit}, params) {//改变名字类似的企业companyName
    commit('changeCompanyNameList',params);
  },
  async getReport({commit}, params) {//获取成绩单
    const res = await api.getReport(params);
    if (res.Code == 200 && res.Result) {
      commit('getReport', res.Result);
    }
    return res;
  },
  async getReportTop({commit}, params) {//获取成绩单
    const res = await api.getReportTop(params);
    if (res.Code == 200 && res.Result) {
      commit('getReportTop', res.Result);
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
