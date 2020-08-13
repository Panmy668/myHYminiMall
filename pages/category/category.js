// pages/category/category.js
import * as categoryApi from '../../service/api/categoryapi'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentHeight: 100,
    catagorys: [],
    subcategories: [],
    categoryDetail: [],
    content_scroll_top:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let windowHeight = wx.getSystemInfoSync().windowHeight // 屏幕的高度
    let windowWidth = wx.getSystemInfoSync().windowWidth // 屏幕的宽度
    console.log(windowHeight * 750 / windowWidth)
    this.setData({
      currentHeight: windowHeight * 750 / windowWidth
    })
    this.getCategory(); 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getCategory: function () {
    categoryApi.getCategory().then(res => { 
      const categoryArray = res.data.data.category.list.map(item => {
        return {
          title: item.title,
          maitKey: item.maitKey,
          miniwallkey:item.miniWallkey
        }
      });
      this.setData({
        catagorys: categoryArray
      })  
      this.getSubcategory(categoryArray[0].maitKey);
      this.getCategoryDetail(categoryArray[0].miniwallkey,'pop')
    }).catch(res => {
      wx.showLoading({
        title: '类目加载失败',
      })
    })
  },
  menuclick: function (e) { 
    let maitkey=e.detail.maitkey;
    let miniwallkey=e.detail.miniwallkey;
    this.setData({
      content_scroll_top:0
    })
    this.getSubcategory(maitkey);
    this.getCategoryDetail(miniwallkey,'pop')
    
  },
  getSubcategory(maitKey) {
    categoryApi.getSubcategory({
      maitKey
    }).then(res => {
      this.setData({
      subcategories:res.data.data.list,
    })
    }).catch(err => {})
   
  },
  getCategoryDetail(miniWallkey,type){
    categoryApi.getCategoryDetail({miniWallkey,type}).then(res=>{
     this.setData({
      categoryDetail:res.data
     })
     console.log(this.data.categoryDetail)
    }).catch(res=>{})
  }
})