// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    region: ["河北省", "沧州市", "新华区"],
    now: "",
    loc: "101011600",
  },
  changeRegion: function (e) {
    this.setData({
      region: e.detail.value,
    });
    this.getLoc();
    this.getWeather();
  },
  getLoc: function () {
    var those = this;
    wx.request({
      url: "https://geoapi.qweather.com/v2/city/lookup?",
      data: {
        location: those.data.region[2],
        key: "be89c9e2abfd4039a8e1d3e1e3d8888e",
      },
      success: function (result) {
        // console.log(result.data);
        those.setData({loc:result.data.location[0].id})
      },
    });
  },

  getWeather: function () {
    var that = this; //this不能直接在api内部使用
    wx.request({
      url: "https://devapi.qweather.com/v7/weather/now?",
      data: {
        location: that.data.loc,
        key: "be89c9e2abfd4039a8e1d3e1e3d8888e",
      },
      success: function (res) {
        // console.log(res.data)
        that.setData({ now: res.data.now });
      },
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLoc();
    this.getWeather();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
