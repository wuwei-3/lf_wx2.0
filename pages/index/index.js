// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    locationMain: {},
    address: '当前位置'
  },
  // 进入门店
  goStore() {
    // 跳转必须以/开头
    wx.navigateTo({
      url: '/pages/detail/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.goStore()
    wx.getStorage({
      key: 'user',
      success(val) {},
      fail() {
        wx.navigateTo({
          url: '/pages/login/index',
        })
      },
    })
  },
  // 从地图上选取位置
  getAddress() {
    let res = this.data.locationMain
    let that = this
    wx.chooseLocation({
      latitude: res.latitude,
      longitude: res.longitude,
      complete: (res) => {
        if (res.errMsg.indexOf('ok') != -1) {
          that.setData({
            address: res.name
          })
        }
      }
    })
  },
  //扫码
  onScan() {
    // 只允许从相机扫码
    wx.scanCode({
      success(res) {
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that = this
    // 刚进入开始定位
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        that.setData({
          locationMain: res
        })
      }
    })
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