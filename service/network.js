import {
  baseURL,
  timeout,
  isStartMock
} from './config.js'
import * as mock from './mock.js'

function request(options) {
  wx.showLoading({
    title: '数据加载中',
  })
  return new Promise((resolve, reject) => {
    if (isStartMock) {
      let data = ""
      switch (options.url) {
        case "/home/multidata":
          data = mock.multidata
          break;
        case "/home/data":
          if (options.data.type == 'sell')
            data = mock.homeData_sell
          else if (options.data.type == 'pop')
            data = mock.homeData_pop
          else
            data = mock.homeData_new
          break;
        case "/category":
          data = mock.category;
          break;
        case "/subcategory":
          if (options.data.maitKey == '582')
            data = mock.subcategory_582
          else
            data = mock.subcategory_3627
          break;
        case "/subcategory/detail":
          if (options.data.miniWallkey == '50003')
            data = mock.subcategory_detail_50003
          else
            data = mock.subcategory_detail_10062603
          break;
      }
      wx.hideLoading()
      return resolve({
        data,
        statusCode: 200
      });
    } else {
      wx.request({
        url: options.URL || baseURL + options.url,
        timeout: timeout,
        data: options.data || {},
        dataType: options.dataType || 'json',
        header: options.header || null,
        method: options.method || 'get',
        success: resolve,
        fail: reject,
        complete: res => {
          wx.hideLoading()
        }
      })
    }
  })
}
export default request