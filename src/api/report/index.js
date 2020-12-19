import { request } from '@/service'

export function getProvinceList(params) {//获取省份列表
  return request({
    url: '/api/GetProvinceList',
    method: 'get',
    params: params
  })
}



