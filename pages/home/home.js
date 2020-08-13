// pages/home/home.js
import * as homeApi from '../../service/api/homeapi.js'
import request from '../../service/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    dKeyword: '',
    keywords: '',
    recommend: '',
    tabs: [{text:'流行',type:'pop'},{text:'热销',type:'sell'},{text:'上新',type:'new'} ],
    goods: {
      pop: { page: 1, list: [] },
      sell: { page: 1, list: [] },
      new: { page: 1, list: [] },
    },
    currentType: 'pop'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._multidata()
    this.getProduct('pop');
    this.getProduct('sell');
    this.getProduct('new');
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
    this.getProduct(this.data.currentType)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  _multidata() {
    homeApi.getMultiData().then(res => {
      console.log(res)
      if (res.statusCode === 200) {
        const banners= res.data.data.banner.list.map(item => {
          return item.image
        })
        this.setData({
          banners: banners,
          recommend: res.data.data.recommend.list
        })
      }
    }).catch(err => {
      console.log(err)
    })
  },
  getProduct(type){ 
     homeApi.getProduct({
      type:type,
      page:this.data.goods[type].page
     }).then(res=>{
        const data =res.data.data.list;
        const goods =this.data.goods;
        goods[type].list.push(...data)
        goods[type].page +=1
        this.setData({
          goods: goods
        })
     }).catch(err=>{
      console.log(err)
     })
  },
  tabItemClick:function(event) {
    this.setData({
      currentType:event.detail.currentType
    })
    this.getProduct(this.data.currentType)
  }
})