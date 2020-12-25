import { request } from '@/service'

export function sendSMS(params) {//发送验证码
  return request({
    url: '/Other/SendSMS',
    method: 'get',
    params: params
  })
}
export function userSMSIsVerify(params) {//验证手机是否有效
  return request({
    url: '/Other/UserSMSIsVerify',
    method: 'get',
    params: params
  })
}
export function getWeChatShareData(params) {//获取微信初始化数据
  return request({
    url: '/Other/WeChatShareData',
    method: 'get',
    params: params
  })
}



