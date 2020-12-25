import { request } from '@/service'

export function getProvinceList(params) {//获取省份列表
  return request({
    url: '/GetProvinceList',
    method: 'get',
    params: params
  })
}
export function searchCompanyName(params) {//获取名字类似的企业
  return request({
    url: '/SearchCompanyName',
    method: 'get',
    params: params
  })
}
export function getReport(params) {//获取成绩单
  return request({
    url: '/GetReport',
    method: 'get',
    params: params
  })
}
export function getReportTop(params) {//获取榜单
  return request({
    url: '/GetReportTop',
    method: 'get',
    params: params
  })
}



