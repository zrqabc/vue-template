import * as api from '@/api/other'

const state = {
  SMS: {},//发送验证码
  SMSIsVerify: {},//验证手机是否有效
}
const mutations = {
  sendSMS(state, params) {
    state.SMS = params;
  },
  userSMSIsVerify(state, params) {
    state.SMSIsVerify = params;
  },
}
const actions = {
  async sendSMS({commit}, params) {//发送验证码
    const res = await api.sendSMS(params);
    if (res.Code == 200) {
      commit('sendSMS', res.Result);
    }
    return res;
  },
  async userSMSIsVerify({commit}, params) {//验证手机是否有效
    const res = await api.userSMSIsVerify(params);
    if (res.Code == 200) {
      commit('userSMSIsVerify', res.Result);
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
