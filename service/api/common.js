export function getPhoneNumber(data){
  return request({
    url: '/api/Login/getPhoneNumber',
    method: 'post',
    data: data,
    URL:nativeURL
  })
}

export function getLogin(data){
  return request({
    url: '/api/Login/onLogin',
    method: 'post',
    data: data,
    URL:nativeURL
  })
}