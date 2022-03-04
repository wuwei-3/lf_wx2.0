// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    username: '',
    phone: '',
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
  }
})