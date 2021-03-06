// pages/me/me.js
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
  operation: function (event) {
    console.log(event)
    let category = event.target.dataset.category;
    console.log(category)
    switch (category) {
      case "bind":
        console.log("跳转到绑定页面")
        wx.navigateTo({
          url: '/pages/bind/bind',
        })
        break;
      case "setting":
        console.log("跳转到设置页面")
        wx.navigateTo({
          url: '/pages/setting/setting',
        })
        break;
      case "feedback":
        console.log("跳转到反馈页面")
        wx.navigateTo({
          url: '/pages/me/about/about',
        })
        break;
      case "about":
        console.log("跳转到关于页面")
        wx.navigateTo({
          url: '/pages/me/about/about',
        })
        break;
    }
  }
})