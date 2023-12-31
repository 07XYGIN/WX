// pages/cart/index.js
const app = getApp()
const{ShopList,Del} = require('../../api/shopping')
Page({
    data: {
        checked: !false,
        List:[],
        goodsAmount:0,
        num:1,
        goodsId:'',
        productId:'',
        retail_price:0.1,
        result: [],
        arr:[],
        id:'',
        str:''
    },
    async getshop(){
        let res = await ShopList()
        let num = res.data.cartTotal.goodsCount
        let a = 80  
        this.data.goodsAmount = res.data.cartTotal.goodsAmount  
        this.data.List = res.data.cartList  
        this.setData({  
            List: res.data.cartList,  
            goodsAmount: res.data.cartTotal.goodsAmount  
        })  
        wx.setTabBarBadge({  
            index: 2,  
            text: num + ''  
        })
    },
    addToCart(item) {
      // 添加商品到购物车的逻辑
      num++; // 增加数量
      wx.setTabBarBadge({
        index: 2,
        text: num + ''
      });
    },
    onSubmit(){
            wx.login({
              success: (res) => {
                let data = {
                    actualPrice:'0.1',
                    code:res.code,
                    date: new Date().getTime() + 'w',
                }
                this.setData({actualPrice:this.data.retail_price})
                wx.request({
                  url: 'http://123.60.96.222:3033/api/userpay',
                  method:'POST',
                  data:data,
                  success:(red)=>{
                      console.log(red);
                      wx.requestPayment({
                          timeStamp: red.data.timeStamp,
                          nonceStr: red.data.nonceStr,
                          package: red.data.package,
                          signType: red.data.signType,
                          paySign: red.data.paySign,
                          success (res) {
                              console.log('res' + res);
                           },
                          fail (err) {
                              console.log(err);
                           }
                        })
                  }
                })
              },
            })
    },
    j(){
        this.data.checked = !this.data.checked
        this.setData({checked:this.data.checked})
    },
    onChange(e){
        let arr = this.data.arr || []
        let id =  this.data.id || []
        arr.push(e.detail)
        var str = arr.join(',');
        this.setData({
            arr:arr,
            id:e.detail,
            str:str
        })
    },
    async del(){
        let res = await Del({
            productIds : this.data.str
        })
        this.setData({
            productIds : this.data.str
        })
        this.getshop()
    },
    onShow() {
        this.getshop()
    },
})