// pages/GW/index.js
const app = getApp()
const{List,Add} = require('../../api/List')
Page({
    data: {
        id:'',
        background:[],
        info:{},
        show: false,
        list:[],
        //add
        num:1,
        goodsId:'',
        productId:'',
        retail_price:0.1,
        text:''
    },
    switchAttrPop: function () {
        this.setData({ show: true });
      },
    //ajax
    async Get(){
        let res = await List({
            id:this.data.id
        })
        this.data.background = res.data.gallery
        this.data.info = res.data.info
        let text = this.data.text
        text.replace(/\<img/gi, '<img style="max-width:100%;height:auto" ')
        this.data.text = text
        this.data.list = res.data.attribute
        this.data.productId = res.data.productList[0].id
        this.setData({
            background : res.data.gallery,
            info       : res.data.info,
            list :res.data.attribute,
            productId : res.data.productList[0].id,
            text:res.data.info.goods_desc

        })

    },
      onClose() {
        this.setData({ show: false });
      },
      go(){
        
      },
      mai(){
          wx.login({
            success: (res) => {
              let option = {
                  actualPrice:'0.1',
                  code:res.code,
                  date:'151511515',
              }
              this.setData({actualPrice:this.data.retail_price})
              wx.request({
                url: 'http://123.60.96.222:3033/api/userpay',
                method:'POST',
                data:option,
                success:(red)=>{
                    wx.requestPayment({
                        timeStamp: 'red.data.timeStamp',
                        nonceStr: 'red.data.nonceStr',
                        package: 'red.data.package',
                        signType: 'red.data.signType',
                        paySign: 'red.data.paySign',
                        success (res) {
                         },
                        fail (res) {
                         }
                      })
                }
              })
            },
          })
      },
      async  onClickButton(){
        let res = await Add({
            goodsId:this.data.id,
            number:this.data.num,
            productId:this.data.productId
        })
        this.data.retail_price = res.data.cartTotal.checkedGoodsAmount
        this.setData({
            retail_price:this.data.retail_price,
            show: false
        })
    },
    onChange(event) {
        this.data.num = event.detail
        this.setData({
            num:event.detail
        })
      },
    onLoad(options) {
        this.data.id = options.id
        this.Get()
        console.log(options);
    },
})