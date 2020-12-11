import request from '@/serves'
export function getEnty(data) {
  return request({
    url: '/mock/5b1695a069f2393736205f14/example/base',
    method: 'get',
    params: data
  })
}
export function getAppid(data) {
  return request({
    url: '/mock/5b1695a069f2393736205f14/example/base',
    method: 'get',
    params: data
  })
}


