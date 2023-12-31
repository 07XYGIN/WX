// pages/link/index.js
const app = getApp()
const{Search,Helper} = require('../../api/response')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hotKeywordList:[{
            key:"",
        }],
        HistoryList:[],
        question:[]
    },
    //ajax
    async getdata(){
        let res = await Search()
        this.data.hotKeywordList = res.data.hotKeywordList
        this.setData({
            hotKeywordList:res.data.hotKeywordList
        })
    },
    //method
    getCurrentPages(e){
        wx.navigateBack({
            delta: 1
        })
    },
    del(){
        this.setData({
            HistoryList:[]
        })
    },
    async edit(e){   
        let res = await Helper({
            keyword :this.data.question,
            page:1,
            size:'undefined',
            sort:'id',
            order: 'desc',
            categoryId: 0
        })
        this.data.question = e.target.dataset.id.keyword
        this.setData({
            question : e.target.dataset.id.keyword,
            HistoryList:e.target.dataset.id.keyword
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getdata()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})