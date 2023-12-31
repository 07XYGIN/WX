// index.js
// 获取应用实例
const app = getApp()
const{GetList} = require('../../api/response')
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  data: {
      background: [],
      category:[],
      brandList:[],
      newGoodsList:[],
      hotGoodsList:[],
      topicList:[],
      categoryList:[],
  },
    getid(e){
        let str = e.currentTarget.dataset.data
        let id = str.split('=')[1]
        wx.navigateTo({
            url: `/pages/category/category?id=${id}`,
          })
    },
    tap(e) {  
        wx.setStorageSync('s', e.currentTarget.dataset.id);  
    },
    getget(e){
        wx.navigateTo({
          url: `../GW/index?id=${e.currentTarget.dataset.id}`,
        })
    },
    getItemID(e) {  
        wx.navigateTo({
          url: `../GW/index?id=${e.currentTarget.dataset.id}`,
        }) 
    } ,
    ggg(e){
      wx.navigateTo({
        url: `../GW/index?id=${e.currentTarget.dataset.id}`,
      }) 
    },
  async getdata(){
      let res = await GetList()
      this.data.background = res.data.banner
      this.data.category = res.data.channel
      this.data.brandList = res.data.brandList
      this.data.newGoodsList = res.data.newGoodsList
      this.data.hotGoodsList = res.data.hotGoodsList
      this.data.topicList = res.data.topicList
      this.data.categoryList = res.data.categoryList
      this.setData({
        background:this.data.background,
        category:res.data.channel,
        brandList:res.data.brandList,
        newGoodsList:res.data.newGoodsList,
        hotGoodsList:res.data.hotGoodsList,
        topicList:res.data.topicList,
        categoryList:res.data.categoryList
      })
  },
  onLoad(options) {
      this.getdata()
    //   wx.startPullDownRefresh()
  },
})
