import {request} from '../utils/requests.js'

module.exports = {
    List:(data)=>{
        return request({
          url:'/goods/detail?',
          method:"GET",
          data
        })
    },
    Add:(data)=>{
        return request({
          url:'/cart/add',
          method:"post",
          data,
          header: 'X-Nideshop-Token',
        })
    },
}