// pages/profile/w-header/w-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    getPhoneNumber(e){
      console.log(e)
       const data={
        encryptedData:e.detail.encryptedData,
        errmsg:e.detail.errMsg,
        iv:e.detail.iv 
       }
      this.triggerEvent("getPhoneNumber",data,{})
    }
  }
})
