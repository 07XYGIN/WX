const { TopicIm } = require('../../api/category')  
Page({      
    data: {    
        id: '',
        list:[],    
    },    
    async getData(){  
        let res = await TopicIm({  
            id: this.data.id  
        })  
        this.list = res.data.brand
        this.setData({
            list:res.data.brand
        })
    },  
    onLoad: function () {        
        let id = wx.getStorageSync('s');  
        this.setData({ id });          
    },  
    onReady(options) {  
        this.getData()  
    },  
})