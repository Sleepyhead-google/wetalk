//index.js
const app = getApp()

// const { promisifyAll, promisify } =  require('miniprogram-api-promise');
// const wxp = {}
// // promisify all wx's api
// promisifyAll(wx, wxp)

Page({
  data: {
    systemInfo: null,
    tabs: [],
    activeTab: 0,
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
    const titles = ['首页', '外卖', '商超生鲜', '购物', '美食饮品', '生活服务', '休闲娱乐', '出行']
    const tabs = titles.map(item => ({title: item}))
    this.setData({tabs})
    this.setData({
      systemInfo: app.globalData.systemInfo,
    })
    console.log(this.data.systemInfo, "sys");
  },
  
  onTabCLick(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
  },

  onChange(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
  }
})
