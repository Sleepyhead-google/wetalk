// components/commonCard.js
const app = getApp()
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
    sysInfo: null,
  },
  attached() {
    const video = wx.createVideoContext("video")
    video.requestFullScreen({
      direction: 0,
    })
    console.log(video, "video");
    this.setData({
      sysInfo: app.globalData.systemInfo,
    })
  },
  /** 
   * 组件的方法列表
   */
  methods: {

  }
})
