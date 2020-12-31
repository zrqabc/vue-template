import { request } from '@/service'

export function sendRecord(params) {//发送记录
  return request({
    url: '/Record',
    method: 'get',
    params: params
  })
}




