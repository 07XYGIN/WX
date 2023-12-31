const app = getApp()  
const { Login } = require('../../api/login')  
Page({
    data: {
        img: 'http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png',
        code:'',
        appid:'',
        nickName:'点击登录'
    },
    updateNickname: function (e) {
        this.setData({
            nickname: e.detail.value
        });
    },
    //方法
    async Login() {
        const accountInfo = wx.getAccountInfoSync();
        let appid = accountInfo.miniProgram.appId;
        this.setData({ appid }, () => {
          this.login();
        });
      },
      
      login() {
        wx.login({
          success: (res) => {
            this.data.code = res.code;
            this.setData({
              code: res.code
            });
            this.doLogin();
          },
        });
      },
      
      async doLogin() {
        let res = await Login({
          code: this.data.code,
          appid: this.data.appid,
        });
      },
    getimg(e) {
        this.setData({
            img: e.detail.avatarUrl
        })
        wx.getUserProfile({
          desc: 'desc',
          success: (res) => {
              console.log(res);
              this.data.nickName = res.userInfo.nickName
              this.data.img = res.userInfo.avatarUrl
            this.setData({
            nickName: res.userInfo.nickName,
              img:res.userInfo.avatarUrl,
              hasUserInfo: true
            })
          }
        })
        console.log(1);
    },
    //ajax
    onLoad(options) {

    },
})