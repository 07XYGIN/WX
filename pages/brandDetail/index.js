const app = getApp()  
const { TopicList,TextList,TopicIm } = require('../../api/category') 
Page({
    data: {
        content:[],
        imgList: [  
      "//yanxuan.nosdn.127.net/75c55a13fde5eb2bc2dd6813b4c565cc.jpg",  
      "//yanxuan.nosdn.127.net/e27e1de2b271a28a21c10213b9df7e95.jpg",  
      "//yanxuan.nosdn.127.net/9d413d1d28f753cb19096b533d53418d.jpg",  
      "//yanxuan.nosdn.127.net/64b0f2f350969e9818a3b6c43c217325.jpg",  
      "//yanxuan.nosdn.127.net/a668e6ae7f1fa45565c1eac221787570.jpg",  
      "//yanxuan.nosdn.127.net/0d4004e19728f2707f08f4be79bbc774.jpg",  
      "//yanxuan.nosdn.127.net/79ee021bbe97de7ecda691de6787241f.jpg"  
        ],
        text:[],
        im:[]
},
    // ajax begin 
    async getdata(){
        let res = await TopicList({
            id:314
        })
        this.data.content = res.data
        this.setData({
            content:res.data.content
        })
    },
    async getTList(){
       let res =  await TextList({
        valueId: 314,
        typeId: 1,
        size: 5
       }) 
       this.data.text = res.data.data
       this.setData({
           text:res.data.data
       })
    },
    async getIm(){
       let res =  await TopicIm({
        id: 314
       })
       this.im = res.data
       this.setData({
           im:res.data
       })
    },
    onLoad(options) {
        this.getdata(),
        this.getTList(),
        this.getIm()
        console.log(123);
    },
})