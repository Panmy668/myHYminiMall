// components/w-category/w-category.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentHeight: {
      type: Number,
      value: 0
    },
    catagorys: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentHeight: 100,
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    menuClick: function (option) {
      let index = option.currentTarget.dataset.index;
      let maitkey = option.currentTarget.dataset.maitkey;
      let miniwallkey= option.currentTarget.dataset.miniwallkey;
      this.setData({
        currentIndex: index
      })
      this.triggerEvent('menuclick', {
        index: index,
        maitkey: maitkey,
        miniwallkey:miniwallkey
      }, {})
    }
  }
})