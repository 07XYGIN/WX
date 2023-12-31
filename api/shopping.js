import {request} from '../utils/requests.js'
module.exports = {
    ShopList:(data)=>{
        return request({
            url:'/cart/index',
            method:"GET",
            data
        })
    },
    Del:(data)=>{
        return request({
          url:'/cart/delete',
          method:"POST",
          data,
          header: 'X-Nideshop-Token',
        })
    }
}