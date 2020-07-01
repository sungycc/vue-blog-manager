import request from '@/utils/request.js'

export function fetchUserRegister(data) {
  return request({
    url: '/api/user/register',
    method: 'get',
    params: data,
  })
}

export function fetchUserLogin(query) {
  return request({
    url: '/dataCapabilityMap/systemList',
    method: 'get',
    params: query,
  })
}
