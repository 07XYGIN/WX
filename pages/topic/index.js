const app = getApp()  
const { Topic } = require('../../api/category')  
  
Page({  
    data: {  
        Topic: [],  
        page: 1,  
        showPage: false  
    },  
  
    // ajax begin  
    async getList() {  
        let res = await Topic({  
            page: this.data.page,  
            size: 10  
        })  
        this.setData({  
            Topic: res.data.data,  
            page: this.data.page  
        })  
    },  
  
    next() {  
        this.setData({  
            page: this.data.page + 1  
        }, () => {  
            this.getList(); 
        });  
    },  
    tugo(){
        this.setData({  
            page: this.data.page - 1
        }, () => {  
            this.getList(); 
        });  
    },
    // ajax end  
  
    onLoad(options) {  
        this.getList()  
    },  
})