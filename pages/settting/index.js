// pages/settting/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    show2:false,
    show3:true,
    columns: ['男','女'],
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      }
      if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
  },
  // 生日时间选择
  onInput(event) {
    this.setData({
      currentDate: event.detail,
    });
  },
  // 性别选择
  onChangeSex(){
    this.onClose2()
  },
  // 生日确认框
  timeConfirm() {
    this.onClose()
  },
  // 生日弹窗
  onBirthday() {
    wx.hideTabBar()
    this.setData({
      show: true
    })
  },
  // 性别弹窗
  onSex() {
    wx.hideTabBar()
    this.setData({
      show2: true
    })
  },
  // 关闭生日弹窗
  onClose() {
    wx.showTabBar()
    this.setData({
      show: false
    })
  },
  onClose2() {
    wx.showTabBar()
    this.setData({
      show2: false
    })
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

  }
})