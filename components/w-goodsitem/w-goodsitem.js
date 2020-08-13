// components/w-goods/w-goodsitem/w-goodsitem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsItem: Object,
    value: null
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goodsDetail: function (option) {
    
      wx.navigateTo({
        url: '/pages/detail/detail?iid=' + option.currentTarget.dataset.iid,
      })
    }
  }
})