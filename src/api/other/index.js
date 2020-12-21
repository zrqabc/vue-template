import { request } from '@/service'

export function sendSMS(params) {//发送验证码
  return request({
    url: '/api/Other/SendSMS',
    method: 'get',
    params: params
  })
}
export function userSMSIsVerify(params) {//验证手机是否有效
  return request({
    url: '/api/Other/UserSMSIsVerify',
    method: 'get',
    params: params
  })
}



