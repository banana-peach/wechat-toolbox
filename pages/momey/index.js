const api = require("../../utils/api") //引入同意管理的接口js
const app = getApp() //引入全局对象
// pages/momey/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  //登录
  login() {
    if (!this.data.phone.trim()) {
      Toast('请输入正确的手机号');
      return
    }
    let data = {
      phone: this.data.phone,
      password: this.data.password,
    }
    api.login(data)
      .then(res => {
        console.log('登录成功', res)
        wx.reLaunch({
          url: '../index/index',
        })
      })
      .catch(err => {
        console.log('登录失败', err)
      })
  },

})