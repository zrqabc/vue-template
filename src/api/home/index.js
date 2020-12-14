import { axiosH5 } from '@/service'

export function getEnty(params) {
  return axiosH5({
    url: '/mock/5b1695a069f2393736205f14/example/base',
    method: 'get',
    params: params
  })
}
export function getAppid(params) {
  return axiosH5({
    url: '/mock/5b1695a069f2393736205f14/example/base',
    method: 'get',
    params: params
  })
}


