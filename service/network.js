import {
  baseURL,
  timeout
} from './config.js'

function request(options) {
  wx.showLoading({
    title: '数据加载中',
  })
  return new Promise((resovice, reject) => {
    wx.request({
      url: options.URL || baseURL + options.url,
      timeout: timeout,
      data: options.data || {},
      dataType: options.dataType || 'json',
      header: options.header || null,
      method: options.method || 'get',
      success: resovice,
      fail: reject,
      complete: res => {
        wx.hideLoading()
      }
    })
  })
}
export default request