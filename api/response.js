import {request} from '../utils/requests.js'

module.exports = {
    //IndexList
    GetList:(data)=>{
        return request({
          url:'/index/index',
          method:"GET",
        })
    },
    Search:(data)=>{
        return request({
          url:'/search/index',
          method:"GET",
        })
    },
    Helper:(data)=>{
        return request({
          url:'/goods/list',
          method:"GET",
          data
        })
    },
}