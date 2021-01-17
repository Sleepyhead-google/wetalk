Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      "pagePath": "/explore/index",
      "text": "遇见",
      "iconPath": "/images/icon_component.png",
      "selectedIconPath": "/images/icon_component_HL.png",
    }, {
      "pagePath": "/find/index",
      "text": "寻找",
      "iconPath": "/images/icon_component.png",
      "selectedIconPath": "/images/icon_component_HL.png",
    }, {
      "pagePath": "/like/index",
      "text": "喜欢",
      "iconPath": "/images/icon_component.png",
      "selectedIconPath": "/images/icon_component_HL.png",
    }, {
      "pagePath": "/me/index",
      "text": "我",
      "iconPath": "/images/icon_component.png",
      "selectedIconPath": "/images/icon_component_HL.png",
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})