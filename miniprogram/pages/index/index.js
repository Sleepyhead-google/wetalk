//index.js
const app = getApp()

// const { promisifyAll, promisify } =  require('miniprogram-api-promise');
// const wxp = {}
// // promisify all wx's api
// promisifyAll(wx, wxp)

Page({
  data: {
    systemInfo: null,
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  },
  onLoad() {
    this.setData({
      systemInfo: app.globalData.systemInfo,
    })
    console.log(this.data.systemInfo, "sys");
  },
})
