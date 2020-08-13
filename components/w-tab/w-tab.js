// components/w-tab/w-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabItemClick(option) { 
      const currentIndex = option.currentTarget.dataset.index
      const currentType = option.currentTarget.dataset.type
      this.setData({
        currentIndex: currentIndex,
        currentType:currentType
      })
      this.triggerEvent("tabItemClick", {
        currentIndex: currentIndex,
        currentType:currentType
      }, {})
    }
  }
})