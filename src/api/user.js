import request from '@/utils/request'

export function login(data) {
  const postData = new FormData()
  for (const key in data) {
    postData.append(key, data[key])
  }

  return request({
    url: '/user/login',
    method: 'post',
    data: postData
  })
}

export function getInfo(data) {
  return request({
    url: '/user/info',
    method: 'post'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
