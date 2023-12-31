import {request} from '../utils/requests.js'

module.exports = { 
    //List
    List:(data)=>{
        return request({
          url:'/goods/category?',
          method:"GET",
          data
        })
    },
    Lists:(data)=>{
        return request({
          url:'/goods/list?',
          method:"GET",
          data
        })
    },   
    Topic:(data)=>{
        return request({
          url:'/topic/list?',
          method:"GET",
          data
        })
    },
    TopicList:(data)=>{
        return request({
          url:'/topic/detail?',
          method:"GET",
          data
        })
    },
    TextList:(data)=>{
        return request({
          url:'/comment/list?',
          method:"GET",
          data
        })
    },
    TopicIm:(data)=>{
        return request({
          url:'/topic/related?',
          method:"GET",
          data
        })
    },
    TopicIm:(data)=>{
        return request({
          url:'/brand/detail?',
          method:"GET",
          data
        })
    },
      // 获取分类列表
  GetClassList:(data)=>{
    return request({
      url:'/catalog/index',
      method:"GET",
    })
  },
  //商品列表
  GetGoodsList:(data)=>{
    return request({
      url:'/catalog/current',
      method:"GET",
      data,
      header: 'X-Nideshop-Token',
    })
  },
}