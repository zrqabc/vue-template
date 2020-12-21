import { request } from '@/service'

export function getProvinceList(params) {//获取省份列表
  return request({
    url: '/api/GetProvinceList',
    method: 'get',
    params: params
  })
}
export function searchCompanyName(params) {//获取名字类似的企业
  return request({
    url: '/api/SearchCompanyName',
    method: 'get',
    params: params
  })
}
export function getReport(params) {//获取成绩单
  return request({
    url: '/api/GetReport',
    method: 'get',
    params: params
  })
}



