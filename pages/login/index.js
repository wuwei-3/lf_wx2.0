// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    username: '19955797645',
    password: '',
  },
  // 获取用户手机号，一键登录
  getPhoneNumber(val) {
    console.log(111, val);
  },
  // 登录
  onLogin() {
    // 跳转到tabbar只能通过switchTo
    wx.switchTab({
      url: '/pages/index/index',
    })
  },

  onLoad() {
    wx.hideTabBar()
    wx.login({
      success(res) {
        cl
      }
    })
  }
})