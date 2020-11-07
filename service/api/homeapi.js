import request from '../network.js'
export function gethomeData() {
  return request({
    url: '/home/data',
    method: 'post',
  })
}

export function getMultiData() {
  return request({
    url: '/home/multidata'
  })
} 

export function getProduct(data) {
  return request({
    url: '/home/data',
    data: data
  })
}